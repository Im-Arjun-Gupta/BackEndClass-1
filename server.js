// created the instance and started the server
const express = require('express');
const app = express();

// body-parser is used to parse the incoming request body
const bodyParser = require('body-parser');
// parse the JSON data and add it to the request body - JSON data is in string format thats why we have to parse it
// JSON Object Literal
app.use(bodyParser.json());

// started the listen of the server at port number 3000
app.listen(3000, () => {
    console.log('Server started at port number 3000');
})

// get request
app.get('/', (req, res) => {
    res.send('This is the get request');
});

// post request
app.post('/api/post', (req, res) => {
    const {name} = req.body;
    console.log(name);
    res.send('data fetched successfully');
})

// connection to the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('Connection successful')})
.catch((err) => {console.log('Connection failed')});