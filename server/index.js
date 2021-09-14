const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const bugs = [
  {
    id: "1234",
    description: "this is a bug yo",
    author: "tomas",
  },
  {
    id: "12345",
    description: "this is a FUBAR bug yo",
    author: "albert",
  },
];

// Creating new instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers }); // TODO - just import these from other files

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
