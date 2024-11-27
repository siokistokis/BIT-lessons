const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Beaver!')
});

app.listen(port, () => {
  console.log(`Bebras darbui pasiruoses ant ${port} porto`)
});