const { Schema } = require("mongoose")

const filmsSchema = new Schema({
  _id: String,
  title: {
    type: String,
    required: true
  },
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: {
    type: Date,
    required: true
  },
  characters: [{
    type: String,
    ref:"Character"

  }],
  planets: [{
    type: String,
    ref:"Planet"

  }]
})


filmsSchema.statics.list = async function () {
  return await this.find().populate("characters", ["name"]).populate("planets", ["name"])
}

filmsSchema.statics.get = async function (id) {
  return await this.findById(id).populate("characters", ["name"]).populate("planets", ["name"])
}

filmsSchema.statics.insert = async function (film) {
  return await this.create(film)
}

filmsSchema.statics.delete = async function (id) {
  return await this.findByIdAndRemove(id);
}

module.exports = filmsSchema