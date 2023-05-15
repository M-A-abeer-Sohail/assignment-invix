const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EntrySchema = new Schema({
  location: {
    type: String,
    required: true
  },
  flow: {
    type: Number,
    required: true
  },
  battery: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Entry', EntrySchema)