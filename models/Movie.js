const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema(
  {
    title: { type: String, require: true, unique: true },
    des: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgsm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamp: true }
);
module.exports = mongoose.model("Movie", MovieSchema);
