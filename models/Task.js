const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  nameFestival: {
    type: String,
    required: true
  },
  countryFestival: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Festivals", TaskSchema);
