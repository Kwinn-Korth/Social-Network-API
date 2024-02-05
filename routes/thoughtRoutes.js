const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

// TODO: Define thought-related routes

// Example: Get all thoughts
router.get('/getAll', thoughtController.getAllThoughts);

// Example: Get a thought by ID
router.get('/:id', thoughtController.getThoughtById);

// Example: Create a new thought
router.post('/create', thoughtController.createThought);

// Example: Update a thought by ID
router.put('/:id/update', thoughtController.updateThoughtById);

// Example: Delete a thought by ID
router.delete('/:id/delete', thoughtController.deleteThoughtById);

module.exports = router;
