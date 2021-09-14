const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Bug {
    title: String
    description: String
  }
  type Query {
    bugs: [Bug]!
  }
`;

module.exports = typeDefs;
