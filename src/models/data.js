const mongoose = require("mongoose");

const eventMediaSchema = new mongoose.Schema({
  folderName: {
    type: String,
    required: true,
  },
  folderID: {
    type: String,
    required: true,
  },
  folderDescription: {
    type: String,
    required: true,
  },
  numImages: {
    type: Number,
    required: true,
  },
  numVideos: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  videos: {
    type: Array,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
});
module.exports =
  mongoose.models["event-media"] ||
  mongoose.model("event-media", eventMediaSchema);
