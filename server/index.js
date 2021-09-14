const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

// Creating new instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers }); // TODO - just import these from other files

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
