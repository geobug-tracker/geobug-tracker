const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Bug {
    id: ID!
    title: String!
    description: String
    userId: String
    priority: String
    status: String
    linkRepo: String
    product: String
  }

  type User {
    id: ID!
    userName: String!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    teamId: String
    bugs: [Bug]
  }

  type Team {
    id: ID!
    name: String!
    company: String
  }

  type Query {
    bugs: [Bug]
    bug(id: Int): Bug
    users: [User]!
    user(userName: String!): User
  }

  type Mutation {
    updateBug(input: updateBugInput): Bug
    addBug(input: inputBug): [Bug]
    deleteBug(id: ID!): Bug
    login(userName: String, password: String): User
  }

  input inputBug {
    title: String!
    description: String
    userId: Int
    priority: String
    status: String
    linkRepo: String
    product: String
  }

  input updateBugInput {
    id: String!
    status: String!
  }
`;

module.exports = typeDefs;

// Create ticket/bug
// Move ticket to in-progess/done
// Update ticket
// Delete ticket
// login/logout
// sign-up
