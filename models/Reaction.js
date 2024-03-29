const { Schema, model } = require("mongoose");
const formatDate = require("../utils/formatDate");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (CreatedAt) => {
        return formatDate(CreatedAt);
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;