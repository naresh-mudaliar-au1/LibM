import { model, Schema } from "mongoose";

const bookModel = new Schema({
  title: { type: String },
  author: { type: String },
  summary: { type: String },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = new model("books", bookModel);
