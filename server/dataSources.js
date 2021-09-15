const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  //store is going to be the sql database
  // note - should we destructure here?
  constructor(store) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    // a graph API's context is an object that's shared across every resolver in a GraphQl request
    this.context = config.context;
  }

  /**
   * User can be called with an argument that includes email, but it doesn't
   * have to be. If the user is already on the context, it will use that user
   * instead
   */
  //    return ALL bugs records from SQL database
  async getAllBugs() {
    const bugs = await this.store.query(`SELECT * FROM bug`);
    console.log(bugs.rows[0]);
    return bugs.rows[0] ? [bugs.rows[0]] : null;
  }

  async getBug(bugId) {
    const { id } = bugId;
    const bug = await this.store.query(`SELECT * FROM bug WHERE id = $1`, [id]);
  }
}

module.exports = UserAPI;
