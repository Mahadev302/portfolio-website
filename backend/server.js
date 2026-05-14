const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{

    res.send("Backend Running");

});

app.post("/contact",(req,res)=>{

    console.log(req.body);

    res.send("Message Received");

});

app.listen(5000,()=>{

    console.log("Server Started");

});