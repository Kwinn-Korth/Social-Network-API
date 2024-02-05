const express = require('express');
const router = express.Router();
const reactionController = require('../controllers/reactionController');

// TODO: Define reaction-related routes

// Example: Create a new reaction
router.post('/create', reactionController.createReaction);

// Example: Delete a reaction by ID
router.delete('/:id/delete', reactionController.deleteReactionById);

module.exports = router;
