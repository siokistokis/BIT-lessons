const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const fs = require('node:fs');
const app = express();
const port = 80;

// const domain = 'http://localhost';
const domain = 'http://books.final/';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.get('/create', (req, res) => {
  const file = fs.readFileSync('./html/create.html', 'utf8');
  const template = handlebars.compile(file);
  const data = { manoKintamasis: 'Labas' };
  const html = template(data);
  res.send(html);

});


app.listen(port, () => {
  console.log(`Books ready to work ${port} porto!`);
});