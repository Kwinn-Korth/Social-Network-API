const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  // TODO: Define friend schema fields
  // Example: user1Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //          user2Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //          status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },

  user1Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user2Id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
