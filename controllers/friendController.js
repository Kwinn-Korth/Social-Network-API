const Friend = require('../models/Friend');

// TODO: Implement friend-related controller functions

// Add a friend to a user's friend list
const addFriend = async (req, res) => {
  try {
    // TODO: Add a friend to the user's friend list in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Remove a friend from a user's friend list
const removeFriend = async (req, res) => {
  try {
    // TODO: Remove a friend from the user's friend list in the database
    const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    { $pull: { friends: req.params.friendId } },
    { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addFriend,
  removeFriend,
};
