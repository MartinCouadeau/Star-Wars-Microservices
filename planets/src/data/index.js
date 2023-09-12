const planets = require("./planets.json")


module.exports = {
  list: async () => {
    return planets
  },

  create: async () => {
    throw Error("an error has ocurred while creating the planet in the DB")
  }
}