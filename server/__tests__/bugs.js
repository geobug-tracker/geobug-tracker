const { ApolloServer } = require('apollo-server');
const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');

const { GET_ALL_BUGS } = require('../queries/bugs');
const data = require('../data');

const server = new ApolloServer({ typeDefs, resolvers });

describe('Testing bug resolver', () => {
  it('Should return bug titles', async () => {
    const result = await server.executeOperation({
      query: GET_ALL_BUGS,
      variables: {},
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.bugs).toHaveLength(2);
    expect(result.data?.bugs[0].title).toBe('The frontend is not working.');
    expect(result.data?.bugs[1].description).toBe('This is another description.');
  });
});
