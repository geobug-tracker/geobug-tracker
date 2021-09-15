const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');

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

const data = require('../data');

const server = new ApolloServer({ typeDefs, resolvers });

xdescribe('Testing bug resolver', () => {
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
