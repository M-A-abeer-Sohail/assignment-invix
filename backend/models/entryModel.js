const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EntrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  latitude:{
    type: String,
    required: true
  },
  longitude:{
    type: String,
    required: true
  },
  flow: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  battery: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Entry', EntrySchema)