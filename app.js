const express=require('express');
const mongoose=require('mongoose');
const app=express();
//config Environment variables
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
//connection file
require('./db');
//Listening port
app.listen(5000,()=>{
    console.log('server running at 5000');
})