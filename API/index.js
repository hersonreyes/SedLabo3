const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const MovieModel = require("./models/Movies");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://Merson:mer123@sed.pnwcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
});

app.post("/insert",async (req,res)=>{
const movieName = req.body.movieName;
const movie = new MovieModel({movieName: movieName});

try {
    await movie.save();
    res.send(" inserted data"); 
} catch(err){   
    console.log(err);
}
});

app.get("/read",async (req,res)=>{
    MovieModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }

        res.send(result);
    });
    });

app.listen(5000,()=>{
    console.log("Server running on port 5000")
});

