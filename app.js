const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/acheezements');
const goalSchema = new mongoose.Schema({
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

const Goal  = mongoose.model('Goal', goalSchema);

Goal.find({}, function(err, goals) {
  if(err) {
    console.log(err);
  } else {
    console.log("All goals");
    console.log(goals)
  }
});

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

module.exports = app;

var goals = [
  { goal: "Meditate", complete: false },
  { goal: "Drink 8 glasses of water", complete: false },
  { goal: "Run 10k", complete: true },
  { goal: "Write a journal", complete: false },
];

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.post('/', (req, res) => {
  console.log(req.body);
    Goal.create({
      text: req.body.goal
    }, function(err, goal, next) {
      err ? console.log(err) : console.log(goal);
    });
    req.body.cheeze ? res.redirect('/acheezements'): res.redirect('/')

})

app.get('/acheezements', (req, res) => {
  // get data (eventually find by date)
  Goal.find({}, function(err, allGoals) {
    err ? console.log(err) : res.render("acheezements", { goals: allGoals });
  })
});

app.post('/update', (req, res) => {
  console.log(req.body.id)
  Goal.findById({_id: req.body.id}, function (err, goal) {
    if (err) return console.log(err);

    goal.completed = true;
    goal.save(function (err, updatedGoal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    });
  });
});

app.listen(3000);
console.log('Host server started')
