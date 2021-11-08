const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("note", noteSchema);
