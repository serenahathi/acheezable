const mongoose = require('mongoose')

const Suggestion = mongoose.model('Suggestion', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {Suggestion};
