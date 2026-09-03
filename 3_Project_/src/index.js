import connectDB from "./db/index.js";
// require("dotenv").config({path:"./.env"});
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
connectDB();





/*
import mongoose from "mongoose";
import {DB_NAME} from "./constansts.js";
dotenv.config();
import express from "express";

const app=express();

(async()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(err)=>{
        console.log("Express server error", err);
        throw err;})
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on port ${process.env.PORT}`);
        });
    }catch(err){
        console.log("Express server error", err);
        throw err;
    }
})()
*/