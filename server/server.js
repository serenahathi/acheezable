const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose')
const {Goal} = require('./models/goal')
const app = express();

app.use(bodyParser.json());
app.set('view engine', "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

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






app.listen(3000, () => {
  console.log("Started on port 3000")
});

module.exports = {app};