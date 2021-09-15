const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  // this.store is our SQL pool
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
    this.context = config.context;
  }

  /**
   * User can be called with an argument that includes email, but it doesn't
   * have to be. If the user is already on the context, it will use that user
   * instead
   */
  async getAllBugs() {
    try {
      const bugs = await this.store.query(`SELECT * FROM bug`);
      return bugs.rows ? bugs.rows : [];
    } catch (err) {
      console.error(err);
    }
  }

  async getBug({ id }) {
    const results = await this.store.query(`SELECT * FROM bug WHERE id = $1`, [id]);
    return results.rows[0];
  }

  async addBug({ title, description, userId, priority, status, linkRepo, product }) {
    const res = await this.store.query(
      `INSERT INTO
      bug ( title, userID, description, priority, status, linkRepo, product) VALUES
      ($1, $2, $3, $4, $5, $6, $7)`,
      [title, userId, description, priority, status, linkRepo, product]
    );
    return res.rows ? res.rows : [];
  }

  async updateBug({ id, status }) {
    const res = await this.store.query(`UPDATE bug SET status = $2 WHERE id = $1 RETURNING *`, [
      id,
      status,
    ]);
    return res.rows[0];
  }
}
module.exports = UserAPI;
