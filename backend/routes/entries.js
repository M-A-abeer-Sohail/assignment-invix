const express = require('express')
const {createEntry,
       getAllEntries,
       getEntry,
       deleteEntry,
       updateEntry} = require('../controllers/entryController.js')

const router = express.Router()

// GET all entries
router.get('/', getAllEntries)

// GET a single entry
router.get('/:id', getEntry)

// POST a new entry
router.post('/', createEntry)

// DELETE a entry
router.delete('/:id', deleteEntry)

// UPDATE a entry
router.patch('/:id', updateEntry)

module.exports = router