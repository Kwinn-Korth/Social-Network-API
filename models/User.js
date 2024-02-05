const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // TODO: Define user schema fields
  // Example: username: { type: String, unique: true, required: true },
  //          email: { type: String, unique: true, required: true },
  //          password: { type: String, required: true },
  //          thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
  //          friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }],

  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }],
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
