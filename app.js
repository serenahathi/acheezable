const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
  // var goalOne = req.body.goalOne;
  // var goalTwo = req.body.goalTwo;
  // var goalThree = req.body.goalThree;
  // var goalFour = req.body.goalFour;
  // goals.push(goalOne);
  // goals.push(goalTwo);
  // goals.push(goalThree);
  // goals.push(goalFour);
  res.redirect('/checkbox')
})

app.get('/checkbox', (req, res) => {
  // get data

  res.render("checkbox", { goals: goals });
});

app.listen(3000);
console.log('Host server started')
