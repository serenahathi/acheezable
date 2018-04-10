const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
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
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
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

module.exports = mongoose.model('Goal', GoalSchema);
