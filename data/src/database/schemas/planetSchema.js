const { Schema } = require("mongoose")

const planetsSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true
  },
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{
    type : String, 
    ref:'Character'
  }],
  films: [{
    type: String,
    ref:"Film"

  }]
})


planetsSchema.statics.list = async function () {
  return await this.find().populate("residents", ["name"]).populate("films", ["title"])
}

planetsSchema.statics.get = async function (id) {
  return await this.findById(id).populate("residents", ["name"]).populate("films", ["title"])
}

planetsSchema.statics.insert = async function (planet) {
  return await this.create(planet)
}

planetsSchema.statics.delete = async function (id) {
  return await this.findByIdAndRemove(id);
}

module.exports = planetsSchema