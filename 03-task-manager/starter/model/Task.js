const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  namd: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
