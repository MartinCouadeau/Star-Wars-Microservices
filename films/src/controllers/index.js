const { catchAsync } = require("../utils")

module.exports = {
  createFilm: catchAsync(require("./createFilm")),
  getFilms: catchAsync(require("./getFilms")),
  getOne: catchAsync(require("./getOne")),
  removeFilm: catchAsync(require("./removeFilm"))
}