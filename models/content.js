const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Adventure;
© 2019 GitHub, Inc.