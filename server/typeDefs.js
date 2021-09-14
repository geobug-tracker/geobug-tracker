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
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    teamID: String
    bugs: [Bug]
  }

  type Team {
    id: ID!
    name: String!
    company: String
  }

  type Query {
    bugs: [Bug]!
    users: [User]!
    user(username: String!): User
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
    login(username: String, password: String): User
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
