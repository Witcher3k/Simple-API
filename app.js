const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log("Hello from Middleware");
    next();
})

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("Main route");
});



mongoose.connect('mongodb://localhost/test',
    { useNewUrlParser: true },
    () => {
        console.log("connected to db")
    });

app.listen(3000);