const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListSchema = new Schema(
  {
    title: { type: String, require: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: {type: Array}
  },
  { timestamp: true }
);
module.exports = mongoose.model("List", ListSchema);