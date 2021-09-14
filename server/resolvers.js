const bugs = require('./data');

const resolvers = {
  Query: {
    bugs: () => bugs,
  },
};

module.exports = resolvers;
