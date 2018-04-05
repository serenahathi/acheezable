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
  res.redirect('/acheezements')
})

app.get('/acheezements', (req, res) => {
  // get data currently hardcoded as goals above
  res.render("acheezements", { goals: goals });
});

app.listen(3000);
console.log('Host server started')
