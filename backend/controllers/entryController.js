const Entry = require('../models/entryModel')
const mongoose = require('mongoose')

// Get all entries
const getAllEntries = async (req, res) => {
    const entries = await Entry.find({}).sort({createdAt: -1})
    res.status(200).json(entries)
}

// Get a single entry
const getEntry = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const entry = await Entry.findById(id)
  
    if (!entry) {
      return res.status(404).json({error: 'No such entry'})
    }
  
    res.status(200).json(entry)
  }
  
// POST a new entry
const createEntry = async (req, res) => {
const {location, flow, battery, volume} = req.body

try {
    const entry = await Entry.create({location, flow, battery, volume})
    res.status(200).json(entry)
} catch (error) {
    res.status(400).json({error: error.message})
}

}

// Delete an entry
const deleteEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such entry'})
    }

    const entry = await Entry.findOneAndDelete({_id: id})

    if(!entry) {
    return res.status(400).json({error: 'No such entry'})
    }

    res.status(200).json(entry)
}

// Update an entry
const updateEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such entry'})
    }

    const entry = await Entry.findOneAndUpdate({_id: id}, {
    ...req.body
    })

    if (!entry) {
    return res.status(400).json({error: 'No such entry'})
    }

    res.status(200).json(entry)
}

module.exports = {
    createEntry,
    getAllEntries,
    getEntry,
    deleteEntry,
    updateEntry
}