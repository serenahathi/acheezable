const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
res.render('index.ejs')
});

app.get('/checkbox', (req, res) => {
  res.render('checkbox.ejs')
});

app.listen(3000);
console.log('Host server started')
