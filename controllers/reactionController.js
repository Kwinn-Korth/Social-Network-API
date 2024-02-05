const Reaction = require('../models/Reaction');

// TODO: Implement reaction-related controller functions

// Create a new reaction
const createReaction = async (req, res) => {
  try {
    // TODO: Create a new reaction in the database
    const newReaction = await Reaction.create(req.body);
    res.status(201).json(newReaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete reaction by ID
const deleteReactionById = async (req, res) => {
  try {
    // TODO: Delete reaction by ID from the database
    const deletedReaction = await Reaction.findByIdAndDelete(req.params.id);
    if (!deletedReaction) {
    return res.status(404).json({ message: 'Reaction not found' });
    }
     res.json({ message: 'Reaction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createReaction,
  deleteReactionById,
};
