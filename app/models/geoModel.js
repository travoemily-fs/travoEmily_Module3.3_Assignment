const mongoose = require("mongoose");

// REMEMBER! properties to include: name, date, location (long+lat values)
const geoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your geo event must have a name to be recorded."],
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Your geo event must have a date to be recorded. "],
  },
  location: {
    longitude: {
      type: Number,
      required: [true, "Longitude is required"],
    },
    latitude: {
      type: Number,
      required: [true, "Latitude is required."],
    },
  },
});

module.exports = mongoose.model("GeoData", geoSchema);
