const { gql } = require('apollo-server');

module.exports = {
  GET_BOOK_TITLES: gql`
    {
      books {
        title
      }
    }
  `,
};
