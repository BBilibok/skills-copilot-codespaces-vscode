// Create web server
// npm install express body-parser
// npm install nodemon -g
// nodemon comments.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

app.get('/comments/:id', (req, res) => {
    res.send('Get comment by id');
});

app.post('/comments', (req, res) => {
    res.send('Create a comment');
});

app.put('/comments/:id', (req, res) => {
    res.send('Update comment by id');
});

app.delete('/comments/:id', (req, res) => {
    res.send('Delete comment by id');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});