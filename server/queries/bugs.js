const { gql } = require('apollo-server');

module.exports = {
  GET_ALL_BUGS: gql`
    {
      bugs {
        title
        description
      }
    }
  `,
};
