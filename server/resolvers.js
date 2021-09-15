const bugs = require("./data");

const resolvers = {
  Query: {
    bugs: (_, __, { dataSources }) => dataSources.bugAPI.getAllBugs(),
    bug: (_, { id }, { dataSources }) =>
      dataSources.bugAPI.getBug({ bugid: id }),
  },
  Mutation: {
    addBug: async (_, args, { dataSources }) => {
      console.log(args);
      const bugs = await dataSources.bugAPI.addBug(args.input);
      return bugs;
    },
  },
};

module.exports = resolvers;
