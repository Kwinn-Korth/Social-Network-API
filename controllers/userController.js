const User = require('../models/User');

// TODO: Implement user-related controller functions

// Get all users
const getAllUsers = async (req, res) => {
  try {
    // TODO: Fetch all users from the database
     const users = await User.find({});
      res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    // TODO: Fetch user by ID from the database
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
     res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    // TODO: Create a new user in the database
     const newUser = await User.create(req.body);
     res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    // TODO: Update user by ID in the database
     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
     if (!updatedUser) {
       return res.status(404).json({ message: 'User not found' });
     }
     res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    // TODO: Delete user by ID from the database
     const deletedUser = await User.findByIdAndDelete(req.params.id);
     if (!deletedUser) {
       return res.status(404).json({ message: 'User not found' });
     }
     res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
