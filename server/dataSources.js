const { DataSource } = require("apollo-datasource");

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

  // NB - REFERENCE BOILERPLATE - DATASOURCES Example from Apollo
  //   bookTrips({ launchIds }): Takes an object with an array of launchIds and books them for the logged-in user.
  //   async bookTrips({ launchIds }) {
  //     const userId = this.context.user.id;
  //     if (!userId) return;

  //     let results = [];

  //     // for each launch id, try to book the trip and add it to the results array
  //     // if successful
  //     for (const launchId of launchIds) {
  //       const res = await this.bookTrip({ launchId });
  //       if (res) results.push(res);
  //     }

  //     return results;
  //   }

  //   async bookTrip({ launchId }) {
  //     const userId = this.context.user.id;
  //     const res = await this.store.trips.findOrCreate({
  //       where: { userId, launchId },
  //     });
  //     return res && res.length ? res[0].get() : false;
  //   }
  // //   cancelTrip({ launchId }): Takes an object with a launchId and cancels that launch for the logged-in user.
  //   async cancelTrip({ launchId }) {
  //     const userId = this.context.user.id;
  //     return !!this.store.trips.destroy({ where: { userId, launchId } });
  //   }
  // //   getLaunchIdsByUser(): Returns all booked trips for the logged-in user.
  //   async getLaunchIdsByUser() {
  //     const userId = this.context.user.id;
  //     const found = await this.store.trips.findAll({
  //       where: { userId },
  //     });
  //     return found && found.length
  //       ? found.map((l) => l.dataValues.launchId).filter((l) => !!l)
  //       : [];
  //   }
  // //   isBookedOnLaunch({ launchId }): Determines whether the logged-in user has booked a trip on a particular launch.
  //   async isBookedOnLaunch({ launchId }) {
  //     if (!this.context || !this.context.user) return false;
  //     const userId = this.context.user.id;
  //     const found = await this.store.trips.findAll({
  //       where: { userId, launchId },
  //     });
  //     return found && found.length > 0;
  //   }
}

module.exports = UserAPI;
