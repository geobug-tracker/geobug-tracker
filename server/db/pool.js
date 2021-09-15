const { Pool, Client } = require('pg');
// Go look at the postgres docs
async function connect() {
  const config = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.DATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  };
  try {
    /* Test connnection */
    const client = new Client(config);
    await client.connect();
    client.end();

    /* Create and export pool */
    const pool = new Pool(config);
    console.log(`🏊 Pool connected!`);

    return pool;
  } catch (err) {
    console.log(
      `❌ Database could not connect.\n Do you have a database on ${process.env.PGHOST}:${process.env.PGPORT} where the user "${process.env.PGUSER}" has access?\n Check your enviornment setup files.\n`
    );
    throw err;
  }
}

module.exports = connect;
