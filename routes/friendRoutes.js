const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');

// TODO: Define friend-related routes

// Example: Add a friend to a user's friend list
router.post('/:userId/add/:friendId', friendController.addFriend);

// Example: Remove a friend from a user's friend list
router.delete('/:userId/remove/:friendId', friendController.removeFriend);

module.exports = router;