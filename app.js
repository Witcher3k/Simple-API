const express = require('express');

const app = express();

//ROUTES
app.get('/',(req,res)=>{
    res.send("Hello");
})


app.listen(3000);