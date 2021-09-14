const { gql } = require("apollo-server");
// // best practice - put into own file export, and import to this file - TODO
exports.typeDefs = gql`
  type Bug {
    id: String!
    description: String
  }

  type Query {
    bug: [Bug]
  }
`;
