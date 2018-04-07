const mongoose = require('mongoose')

const Goal = mongoose.model('Goal', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  }
});

module.exports = {Goal};

