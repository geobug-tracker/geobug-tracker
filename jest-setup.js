const connect = require('./server/db/pool');
const path = require('path');
const fs = require('fs');

/*
Before these tests can run, 
clear out the database and re-setup the tables.
*/

global.beforeAll(async () => {
  try {
    const pool = await connect(true);
    const setup = fs.readFileSync(
      path.resolve(__dirname, 'server', '__tests__', 'helpers', 'setup.sql'),
      {
        encoding: 'utf8',
      }
    );

    /* Give access to pool */
    await pool.query(setup);
    global.pool = pool;
  } catch (err) {
    console.error(`❌ Could not clear DB before all tests. Tests aborted.`);
    console.error(err);
  }
});

global.afterAll(async () => {
  await global.pool.end();
});
