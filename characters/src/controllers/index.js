const { catchAsync } = require("../utils")

module.exports = {
  getCharacters: catchAsync(require("./getCharacters")),
  createCharacter: catchAsync(require("./createCharacter")),
  getOne: catchAsync(require("./getOne")),
  removeCharacter: catchAsync(require("./removeCharacter"))
}