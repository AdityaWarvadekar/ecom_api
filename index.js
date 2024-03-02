const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017", console.log("connected to DB"));

const DashboardModel = require("./models/Dashboard");
const host = "http://localhost:4100";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(`/create`, async (req, res)=>{
    const {id} = req.body;
    try{
        const response = await DashboardModel.create({id: id});
        res.status(200).json({success: true});
    }catch(error){
        res.status(500).json({success: false, error: error})
    }
});

app.get(`/hello`, (req, res)=>{
    res.status(200).json({
        hello : "helllooooo"
    })
})

app.get('/api/dashboard/:id', async (req, res)=>{
    const id = req.params.id;
    try{
        const response = await DashboardModel.find({id: id});
        if(response.length==0)
            res.status(404).json({error: "Not Found"});
        else    
            res.status(200).json({response: response});
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})

app.listen("4100", ()=>{
    console.log("server started");
})