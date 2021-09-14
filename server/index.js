const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');
const path = require('path');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const createPool = require('./db/pool');

/* Configure environment variables */
dotenv.config({ path: path.resolve(__dirname, '..', `.${process.env.NODE_ENV}.env`) });

async function startupBackend() {
  const pool = await createPool();
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen(3000);
  console.log(`🚀  Server ready at ${url}`);
}

startupBackend();
