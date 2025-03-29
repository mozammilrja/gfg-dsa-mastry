class UserTracker {
  constructor() {
    // TODO: Initialize a Set for unique visitors
    // TODO: Initialize a Map for last visit timestamps
    // TODO: Initialize a WeakSet for active users

    this.uniqueVisitors = new Set();
    this.lastVisitTimestamps = new Map();
    this.activeUsers = new WeakSet();
  }

  addUser(user) {
    try {
      // TODO: Validate the user object
      if (!user || typeof user !== "object" || !user.id) {
        throw new Error("Invalid user object");
      }
      // TODO: Add user to the Set if new
      this.uniqueVisitors.add(user);
      return `${user.id} added to unique visitor.`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  updateLastVisit(user) {
    try {
      // TODO: Validate the user object
      if (!user || typeof user !== "object" || !user.id) {
        throw new Error("Invalid user object");
      }
      // TODO: Store/update the last visit timestamp in the Map
      const timestamp = new Date();
      this.lastVisitTimestamps.set(user, timestamp);
      return `Updated last visit for ${user.id} at ${timestamp}.`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  getVisitDetails(user) {
    try {
      // TODO: Validate the user object
      if (!user || typeof user !== "object" || !user.id) {
        throw new Error("Invalid user object");
      }
      // TODO: Return visit details from Set and Map
      const isVisited = this.uniqueVisitors.has(user);
      const lastVisited = this.lastVisitTimestamps.get(user);

      return { userId: user.id, isVisited, lastVisited };
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  markActive(user) {
    try {
      // TODO: Validate the user object
      if (!user || typeof user !== "object" || !user.id) {
        throw new Error("Invalid user object");
      }

      this.activeUsers.add(user);
      return `${user.id} marked is active.`;
      // TODO: Add the user to WeakSet as an active user
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}

const tracker = new UserTracker();
const user1 = { id: "123", name: "Alice" };

console.log(tracker.addUser(user1));
console.log(tracker.updateLastVisit(user1));
console.log(tracker.getVisitDetails(user1));
console.log(tracker.markActive(user1));
