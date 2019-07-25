const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const api = require('./routes/api');
mongoose.Promise = global.Promise;

//connection
mongoose.connect("mongodb://localhost/ninja")
//create a express app
const app = express();



//Body parser middle ware
app.use(bodyparser.json());
app.use('/api',api);
app.use(express.static("public"))


//Middleware for error handling
app.use((err,req,res,next)=>{
    console.log("error",err);
   res.status(422).send({err:err.message})
    
})

app.get('/',(req,res)=>{
    console.log("Get request")
    res.send({name:"natalie"})  
})

app.listen(4000,()=>{
    console.log("listening");
    
})