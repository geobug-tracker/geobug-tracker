const bugs = require('./data');

const resolvers = {
  Query: {
    bugs: (_, __, { dataSources }) => dataSources.bugAPI.getAllBugs(),
    bug: (_, { id }, { dataSources }) => dataSources.bugAPI.getBug({ bugid: id }),
  },
};

module.exports = resolvers;
