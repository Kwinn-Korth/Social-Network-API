const Thought = require('../models/Thought');

// TODO: Implement thought-related controller functions

// Get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    // TODO: Fetch all thoughts from the database
    // const thoughts = await Thought.find({});
    // res.json(thoughts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get thought by ID
const getThoughtById = async (req, res) => {
  try {
    // TODO: Fetch thought by ID from the database
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
    return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new thought
const createThought = async (req, res) => {
  try {
    // TODO: Create a new thought in the database
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update thought by ID
const updateThoughtById = async (req, res) => {
  try {
    // TODO: Update thought by ID in the database
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete thought by ID
const deleteThoughtById = async (req, res) => {
  try {
    // TODO: Delete thought by ID from the database
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
