const mongoose = require('mongoose')
const Joi = require('joi')

const ImageData = mongoose.model('imageData', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  imageName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  url: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
}))

// Joi validation
function validateImage(imageData) {
  const schema = {
    title: Joi.string().min(5).max(255).required(),
    description: Joi.string().min(5).max(255).required(),
    imageName: Joi.string().min(5).max(255).required(),
    url: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(imageData, schema)
}

exports.ImageData = ImageData
exports.validate = validateImage