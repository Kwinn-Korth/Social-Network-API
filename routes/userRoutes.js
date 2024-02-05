const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// TODO: Define user-related routes

// Example: Get all users
router.get('/getAll', userController.getAllUsers);

// Example: Get a user by ID
router.get('/:id', userController.getUserById);

// Example: Create a new user
router.post('/create', userController.createUser);

// Example: Update a user by ID
router.put('/:id/update', userController.updateUserById);

// Example: Delete a user by ID
router.delete('/:id/delete', userController.deleteUserById);

module.exports = router;
