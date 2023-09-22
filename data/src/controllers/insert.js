const store = require("../database")
const { response } = require("../utils")

module.exports = async (req, res) => {
  const { model } = req.params
  const newModel = req.body
  const value = await store[model].insert(newModel)
  response(res, 200, value)
}