const { ApolloServer } = require('apollo-server');
const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');

const { GET_BOOK_TITLES } = require('../queries/books');
const data = require('../data');

const server = new ApolloServer({ typeDefs, resolvers });

describe('Testing book resolver', () => {
  it('Should return book titles', async () => {
    const result = await server.executeOperation({
      query: GET_BOOK_TITLES,
      variables: {},
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.books[0].title).toBe('The Awakening');
    expect(result.data?.books[1].title).toBe('City of Glass');
  });
});
