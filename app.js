const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/acheezements');
const goalSchema = new mongoose.Schema({
  cheese: {
    goal1: {
      goal : String,
      complete: Boolean
    },
    goal2: {
      goal : String,
      complete: Boolean
    },
    goal3: {
      goal : String,
      complete: Boolean
    },
    goal4: {
      goal : String,
      complete: Boolean
    },
  },
  completed: Boolean,
  createdAt: {type : Date }
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
  console.log(req.body.goals)
  var goals = req.body.goals;
    Goal.create({
      cheese: {
        goal1: {goal: goals[0], complete: false},
        goal2: {goal: goals[1], complete: false},
        goal3: {goal: goals[2], complete: false},
        goal4: {goal: goals[3], complete: false}
      },
      completed: false,
      createdAt: null
    }, function(err, goal, next) {
      err ? console.log(err) : console.log(goal);
    });
  res.redirect('/acheezements')
})

app.get('/acheezements', (req, res) => {
  // get data (eventually find by date)
  Goal.find({completed: false}, function(err, allGoals) {
    err ? console.log(err) : res.render("acheezements", { goals: allGoals });
  })

});

app.listen(3000);
console.log('Host server started')
