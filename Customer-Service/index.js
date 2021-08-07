const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port= process.env.USER_PORT;
const customerRoute=require('../Customer-Service/route/CustomerRoute')


const app = express();
app.use(cors);


mongoose.connect(
    'mongodb://localhost:27017/robotikka',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    alert("NodeJS Project started")
    app.listen(port,()=>{
        console.log("Customer-route on port 3000")
    })
}).catch((error)=>{
    alert(error)
})

app.use('/api/v1/customer-route',customerRoute);