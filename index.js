const express = require('express');
const products = require('./products');
const mongoose = require("mongoose");
const TransactionModel = require('./models/Transaction');
const cors = require("cors");
const dotenv  = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        credentials: true,
        origin: process.env.CLIENT_URL,
    }
));

app.post("/saveTransaction", async (req, res)=>{
    const {username, prodList} = req.body;

    try{
        const response =  await TransactionModel.create({username: username, prodList: prodList});
        res.status(200).json({success: true});
    }catch(error){  
        res.status(500).json({"Error": error});
    }
})   

app.get("/transactions", async(req, res)=>{
    try{
    const transactions = await TransactionModel.find({});
    res.status(200).json({ success: true, transactions});
    }catch(error){
        res.status(500).json({success: false, error: "Internal Server Error"});
    }    
})

app.listen(process.env.PORT, ()=>{
    console.log("server running ");
})