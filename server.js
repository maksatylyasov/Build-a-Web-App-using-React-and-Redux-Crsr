const mongoose = require('mongoose');


// connection URL for mongoDB
var mongoDB = 'mongodb://127.0.0.1/censusdb';
// connect
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect to censusdb:'));
db.on('connected', console.log.bind(console,'MongoDB connected to censusdb:'));

const express = require('express')
const app = express()

const port = 8080

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use('/api', require('./route/request'))

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})
   

