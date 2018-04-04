const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

module.exports = app;

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.post('/', (req, res) => {
  res.redirect('/checkbox')
})

app.get('/checkbox', (req, res) => {
  res.render('checkbox.ejs')
});

app.listen(3000);
console.log('Host server started')
