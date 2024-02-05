const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  // TODO: Define thought schema fields
  // Example: userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //          content: { type: String, required: true },
  //          reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
