const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

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

    //use Routes
    app.use('/api/items',items); 

    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
