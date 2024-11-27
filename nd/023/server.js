const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>')
});

app.get('/beaver', (req, res) => {
    res.send('<h1>Hello, Beaver!</h1>');
  });

  app.get('/beaver/:color/:size', (req, res) => {
    const {color, size} = req.params;
    // const color = req.params.color;
    // const size = req.params.size;
    res.send(`<h1 style="color: ${color}; font-size ${size}px;">Hello, Beaver!</h1>`);
  });

  app.get('/deer', (req, res) => {
    const {color, size} = req.query;
    res.send(`<h1 style="color: ${color ?? 'black'}; font-size ${size ?? 20}px;">Hello, Deer!</h1>`);
  });

  app.post('/form', (req, res) => {
    res.send('Form post received!');
  });

app.listen(port, () => {
  console.log(`Bebras darbui pasiruoses ant ${port} porto!`);
});