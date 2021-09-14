const bugs = require("./data");

exports.resolvers = {
  Query: {
    //grabbing the bugs array from dummy database
    bug: () => bugs,
  },
};
