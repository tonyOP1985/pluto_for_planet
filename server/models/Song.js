const mongoose = require('mongoose')
const Joi = require('joi')

const Song = mongoose.model('song', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  artist: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  original: {
    type: Boolean,
    required: true
  }
}))

// Joi validation
function validateSong(song) {
  const schema = {
    title: Joi.string().min(2).max(255).required(),
    artist: Joi.string().min(1).max(255).required(),
    original: Joi.boolean()
  }

  return Joi.validate(song, schema)
}

exports.Song = Song
exports.validate = validateSong