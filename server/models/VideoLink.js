const mongoose = require('mongoose')
const Joi = require('joi')

const VideoLink = mongoose.model('videoLink', new mongoose.Schema({
  link: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
}))

// Joi validation
function validateVideoLink(link) {
  const schema = {
    link: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(link, schema)
}

exports.VideoLink = VideoLink
exports.validate = validateVideoLink