const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  // Schema definition
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "public",
      enum: ["public", "private"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  // options
  {
    collection: "storybook_stories",
  }
);

module.exports = mongoose.model("Story", StorySchema);
