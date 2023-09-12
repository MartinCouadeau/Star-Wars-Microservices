const films = require("./films.json")


module.exports = {
  list: async () => {
    return films
  },

  create: async () => {
    throw Error("an error has ocurred while creating the film in the DB")
  }
}