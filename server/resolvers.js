const books = require('./data');

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;
