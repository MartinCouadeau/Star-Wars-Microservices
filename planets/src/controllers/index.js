const { catchAsync } = require("../utils")

module.exports = {
  createPlanet: catchAsync(require("./createPlanet")),
  getPlanets: catchAsync(require("./getPlanets"))
}