const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//bodyParser component
app.use(bodyParser.json());

//db mongoURI
const db = require('./config/keys').mongoURI;

//connect to Mongo db
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected ...'))
    .catch(()=>console.log(err));

    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));

