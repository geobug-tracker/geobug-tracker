const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');
const BugAPI = require('../dataSources');
const { GET_BUG_BY_ID, GET_ALL_BUGS } = require('./helpers/queries');

/* Connect to PG */
let server;
beforeAll(() => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      bugAPI: new BugAPI(global.pool),
    }),
  });
});

describe('Testing bugs resolver', () => {
  it('Should return all bugs.', async () => {
    const { data } = await server.executeOperation({ query: GET_ALL_BUGS, variables: {} });
    expect(data.errors).toBeUndefined();
    expect(data?.bugs).toHaveLength(5);
    expect(data?.bugs[0].title).toBe('First Bug');
    expect(data?.bugs[4].description).toBe('I am the fifth bug');
  });

  it('Should return single bug by ID.', async () => {
    const { data } = await server.executeOperation({ query: GET_BUG_BY_ID });
    expect(data.errors).toBeUndefined();
    expect(data.bug).toMatchObject({
      id: '1',
      title: 'First Bug',
      description: 'I am the first bug',
      status: 'new',
      priority: '1',
    });
  });
});
