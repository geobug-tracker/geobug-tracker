const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');
const pool = require('../db/pool');
const BugAPI = require('../dataSources');

const GET_ALL_BUGS = gql`
  query {
    bugs {
      id
      title
      description
      status
      priority
    }
  }
`;

describe('Testing bug resolver', () => {
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

  afterAll(async () => {
    await global.pool.end();
  });

  it('Should return bug titles', async () => {
    const { data } = await server.executeOperation({
      query: GET_ALL_BUGS,
      variables: {},
    });

    expect(data.errors).toBeUndefined();
    expect(data?.bugs).toHaveLength(5);
    expect(data?.bugs[0].title).toBe('First Bug');
    expect(data?.bugs[4].description).toBe('I am the fifth bug');
  });
});
