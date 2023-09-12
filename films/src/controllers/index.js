const { catchAsync } = require("../utils")

module.exports = {
  createFilm: catchAsync(require("./createFilm")),
  getFilms: catchAsync(require("./getFilms"))
}