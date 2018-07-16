const mongoose = require('mongoose')
const Joi = require('joi')

const Date = mongoose.model('date', new mongoose.Schema({
  date: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
}))

// Joi validation
function validateDate(date) {
  const schema = {
    date: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(date, schema)
}

exports.Date = Date
exports.validate = validateDate