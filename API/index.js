const express = require("express");
const mongoose = require("mongoose");
const app = express();
const MovieModel = require("./models/Movies");

app.use(express.json());


mongoose.connect("mongodb+srv://Merson:mer123@sed.pnwcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
});

app.get("/",async (req,res)=>{
const movie = new MovieModel({movieName: "Terminator"});

try {
    await movie.save();
    res.send(" inserted data"); 
} catch(err){   
    console.log(err);
}
});

app.listen(3000,()=>{
    console.log("Server running on port 3000")
});

