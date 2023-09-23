const { catchAsync } = require("../utils")

module.exports = {
  createPlanet: catchAsync(require("./createPlanet")),
  getPlanets: catchAsync(require("./getPlanets")),
  getOne: catchAsync(require("./getOne")),
  removePlanet: catchAsync(require("./removePlanet"))
}