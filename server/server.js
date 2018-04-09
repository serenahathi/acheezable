const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Goal} = require('./models/goal');

const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.redirect('acheezements/new')
});

app.get('/acheezements/new', (req, res) => {
  res.render('new.ejs')
});

app.get('/acheezements', (req, res) => {
  Goal.find({ "createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-1))}
  }, function(err, currentGoals) {
    err ? console.log(err) : res.render("index", { goals: currentGoals });
  })
});

app.get('/acheezements/show', (req, res) => {
  Goal.find({ "createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-7))}
  }, function(err, goalHistory) {
    console.log(goalHistory)
    err ? console.log(err) : res.render("show", { goals: goalHistory });
  })
})

app.post('/acheezements', (req, res) => {
  Goal.create({
    text: req.body.goal
  }, function(err, goal, next) {
    err ? console.log(err) : console.log(goal);
  });
  req.body.cheeze ? res.redirect('/acheezements') : res.redirect('/')
})

app.post('/update', (req, res) => {
  Goal.findById({_id: req.body.id}, function (err, goal) {
    if (err) return console.log(err);

    goal.completed = true;
    goal.save(function (err, updatedGoal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    });
  });
});

app.post('/show', (req, res) => {
  console.log("hello")
  res.redirect('/acheezements/show');
});

app.listen(3000, () => {
  console.log("Started on port 3000")
});

module.exports = {app};
