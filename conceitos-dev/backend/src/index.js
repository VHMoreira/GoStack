const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
    console.log("Started server");
});