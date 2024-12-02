const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.get('/', (req, res) => {
  res.send('<h1>Books</h1>')
});


app.listen(port, () => {
  console.log(`Books ready to work ${port} porto!`);
});