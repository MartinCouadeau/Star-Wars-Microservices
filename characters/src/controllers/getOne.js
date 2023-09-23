const Characters = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
  const { id } = req.params;
  const characters = await Characters.getOne(id)
  response(res, 200, characters)
}