const Characters = require("../data")

module.exports = async (req, res) => {
  
  const characters = await Characters.list()
  res.status(201).json(characters)

}