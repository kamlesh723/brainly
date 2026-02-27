import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { UserModel } from "./db";

const app = express();
app.use(express.json())

app.post("/api/v1/signUp",async(req,res)=>{
    //zod validation 
    const username = req.body.username;
    const password = req.body.password;

   try {
    await UserModel.create({
        username:username,
        password:password
        //hash the password then store
    })
    res.json({
        //send the message with correct status copde and message
        message:"User Signed Up"
    })}
    catch(e){
        res.status(411).json({
            message:"User already Exists"
        })
    }
})

app.post("/api/v1/signIn",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        
    }
})
app.post("/api/v1/content",(req,res)=>{
    
})
app.get("/api/v1/content",(req,res)=>{
    
})

app.delete("/api/v1/content",(req,res)=>{

})
app.post("/api/v1/brain/share",(req,res)=>{
    
})

app.get("api/v1/brain/:shareLink",(req,res)=>{
    
})

app.listen(3000)