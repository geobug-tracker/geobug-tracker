const config = {
  verbose: true,
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleNameMapper: { '\\.(css|scss|sass)$': 'identity-obj-proxy' },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/server/__tests__/helpers/'],
};

module.exports = config;

/* If in test mode, load up test environment */
process.env = {
  ...process.env,
  PGHOST: '127.0.0.1',
  PGPORT: '5432',
  PGDATABASE: 'geobug_test',
  PGUSER: 'harrisoncramer',
  PGPASSWORD: 'postgres',
};
