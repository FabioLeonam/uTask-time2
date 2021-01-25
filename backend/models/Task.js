const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskText: {
    type: String,
    required: true,
  },
  taskStatus: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', TaskSchema);