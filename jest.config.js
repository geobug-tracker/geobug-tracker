const config = {
  verbose: true,
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleNameMapper: { '\\.(css|scss|sass)$': 'identity-obj-proxy' },
};

module.exports = config;

/* If in test mode, load up test environment */
process.env = Object.assign(process.env, {
  PGHOST: '127.0.0.1',
  PGPORT: '5432',
  PGDATABASE: 'geobug_test',
  PGUSER: 'harrisoncramer',
  PGPASSWORD: 'postgres',
});
