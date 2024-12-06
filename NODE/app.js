const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let items = [
    { id: 1, town: "", country: "", dateOfBitght: "", name: "John", surname: "" },
    { id: 2, name: "Ann" },
    { id: 3, name: "Luke" },
    { id: 4, name: "Dilan" },
    { id: 5, name: "Harry" },
    { id: 6, name: "Helen" },
    { id: 7, name: "Simon" },
    { id: 8, name: "July" }
];

let latestUsedId = items.length;

app.get('/items', (req, resp) => {
    resp.json(items);
})

app.get('/items/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    const item = items.find(element => element.id === id);
    if (item) {
          resp.json(item);
    }else {
        resp.status(404).send("element not found");
    }
})

app.post('/items', (req, resp) => {
    const newItem = {
        id: latestUsedId + 1,
        name: req.body.name
    };
    items.push(newItem);
    latestUsedId++;
    resp.status(201).json(newItem);
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

