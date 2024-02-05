const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  // TODO: Define reaction schema fields
  // Example: userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //          thoughtId: { type: mongoose.Schema.Types.ObjectId, ref: 'Thought', required: true },
  //          content: { type: String, required: true },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  thoughtId: { type: mongoose.Schema.Types.ObjectId, ref: 'Thought', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
