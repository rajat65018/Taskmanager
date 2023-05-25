require('dotenv').config();
const express=require('express');
const dbConnect = require('./app/startup/dbconnect');
const { PORT } = require('./config');
const router = require('./app/routes/userRouter');
const app=express();
app.use(express.json());
app.use(router);
dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log('server running');
    })
}).catch((err)=>{
    console.log('server connection failed');
})