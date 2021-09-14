const { ApolloServer, gql } = require("apollo-server");

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
    bug: Bug!
    users: [User]!
    user(userName: String!): User
  }

  type Mutation {
    addBug(
      id: ID!
      title: String!
      description: String
      userId: String
      priority: String
      status: String
      linkRepo: String
      product: String
    ): BugUpdateResponse!
    deleteBug(id: ID!): BugUpdateResponse!
    login(userName: String, password: String): User
  }

  type BugUpdateResponse {
    success: Boolean!
    message: String
    bugs: [Bug]
  }
`;

module.exports = typeDefs;

// Create ticket/bug
// Move ticket to in-progess/done
// Update ticket
// Delete ticket
// login/logout
// sign-up
