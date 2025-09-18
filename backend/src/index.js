import mongoose from "mongoose";
import{DB_NAME} from "./constants.js";
import express from "express";
import connectDB from "./db/index2.js";
import {app} from './app.js'

//const app= express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8001,()=>{
       console.log(`✅ Server is running on port ${process.env.PORT || 8001}`);

    })    
})
.catch((err)=>{
    console.log("DB Connection Error : ",err);
})






