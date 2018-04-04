const express = require('express');

const app = express();

app.use(express.static('public'));
module.exports = app;

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.get('/checkbox', (req, res) => {
  res.render('checkbox.ejs')
});
app.post('/', (req, res) => {
  redirect('/')
})

app.listen(3000);
console.log('Host server started')
