const resolvers = {
  Query: {
    bugs: (_, __, { dataSources }) => dataSources.bugAPI.getAllBugs(),
    bug: (_, { id }, { dataSources }) => dataSources.bugAPI.getBug({ id }),
  },
  Mutation: {
    updateBug: async (_, { input }, { dataSources }) => {
      const bug = await dataSources.bugAPI.updateBug(input);
      return bug;
    },
    addBug: async (_, args, { dataSources }) => {
      const bugs = await dataSources.bugAPI.addBug(args.input);
      return bugs;
    },
  },
};

module.exports = resolvers;
