const { catchAsync } = require("../utils")

module.exports = {
  getAll: catchAsync(require("./getAll")),
  delete: catchAsync(require("./delete")),
  getById: catchAsync(require("./getById")),
  insert: catchAsync(require("./insert"))
}