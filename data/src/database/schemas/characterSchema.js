const { Schema } = require("mongoose")

const charactersSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true
  },
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: {
    type: String,
    required:true,
    enum: ['Male', 'Female', 'Unknown', 'N/A']
  },
  homeworld: {
    type: String,
    ref:"Planet"

  },
  films: [{
    type: String,
    ref: "Film"
  }]
})

charactersSchema.statics.list = async function () {
  return await this.find().populate("homeworld", ["name"]).populate("films", ["title"])
}

charactersSchema.statics.get = async function (id) {
  return await this.findById(id).populate("homeworld", ["name"]).populate("films", ["title"])
}

charactersSchema.statics.insert = async function (character) {
  return await this.create(character)
}

charactersSchema.statics.delete = async function (id) {
  return await this.findByIdAndRemove(id);
}

module.exports = charactersSchema