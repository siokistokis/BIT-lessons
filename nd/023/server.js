const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>')
});

app.get('/beaver', (req, res) => {
    res.send('<h1>Hello, Beaver!</h1>');
  });

  app.get('/briedis', (req, res) => {
    const data = {
        hello: 'Hello, Briedis!', 
    };
    res.json(data);
  });

  app.get('/beaver/:color/:size', (req, res) => {
    const {color, size} = req.params;
    // const color = req.params.color;
    // const size = req.params.size;
    res.send(`<h1 style="color: ${color}; font-size ${size}px;">Hello, Beaver!</h1>`);
  });

  app.get('/briedis/:color/:size', (req, res) => {
    const { color, size } = req.params;
    const data = {
        spalva: color,
        dydis: size,
    }
   res.json(data);
  });

  app.get('/briedis1/', (req, res) => {
    const { color = '000000', size = '20' } = req.query;
    const data = {
        spalva: color,
        dydis: size,
    }
   res.json(data);
  });


  app.get('/deer', (req, res) => {
    const {color, size} = req.query;
    res.send(`<h1 style="color: ${color ?? 'black'}; font-size ${size ?? 20}px;">Hello, Deer!</h1>`);
  });

  app.post('/form', (req, res) => {
    // const { name, surname, email, password } = req.body;
    // res.send('Form post received! ${name} ${surname} ${email} ${password}');
    res.status(302).redirect('http://localhost:3000/success');
  });

  app.get('/success', (req, res) => {
    res.send('<h1>Forma gavome!</h1>');
  })

app.listen(port, () => {
  console.log(`Bebras darbui pasiruoses ant ${port} porto!`);
});