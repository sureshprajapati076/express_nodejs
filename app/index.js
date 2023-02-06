const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
mongoose.connect("mongodb+srv://admin:gNoCP6k5XVDarnPt@cluster1.ssk95tn.mongodb.net/latestdb?retryWrites=true&w=majority", {
    useUnifiedTopology: true
}, (err) => {
    if (err)
        console.log('error occured');
    else
        console.log('success connection')
})
mongoose.set('strictQuery', true);

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const sch={
    name: String,
    email: String,
    id: Number
}

const mongoModel=mongoose.model("NEWCOL",sch);  //NEWCOL collection will be in db

app.post("/post", async (req,res)=>{
    const data= new mongoModel({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id
    });
    const val= await data.save();
    res.send(val)
})

app.get("/posts", async (req,res)=>{
    const results= await mongoModel.find();
    res.send(results)
})


app.listen(3000, () => {
    console.log("listening in 3000")
})