const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const createPool = require('./db/pool');
const BugAPI = require('./dataSources');

async function startupBackend() {
  const pool = await createPool();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      bugAPI: new BugAPI(pool),
    }),
  });
  const { url } = await server.listen(3000);
  console.log(`🚀  Server ready at ${url}`);
}

startupBackend();
