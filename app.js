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

})


// var awesome = new Goal({
//   goal: "Run 10K",
//   complete: true
// });
// awesome.save(function(err, awe) {
//   if(err) {
//     console.log("oooops")
//   } else {
//     console.log('We just saved a goal');
//     console.log(awe);
//     console.log(awesome);
//   }
// });

// Create is new and save in one function

// Goal.create({
//   goal: 'Eat lots of veg',
//   complete: false
// }, function(err, goal){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(goal);
//   }
// });




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
    Goal.create({
      text: req.body.goal
    }, function(err, goal, next) {
      err ? console.log(err) : console.log(goal);
    });
  res.redirect('/acheezements')
})

app.get('/acheezements', (req, res) => {
  // get data (eventually find by date)
  Goal.find({}, function(err, allGoals) {
    err ? console.log(err) : res.render("acheezements", { goals: allGoals });
  })
});

app.listen(3000);
console.log('Host server started')
