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


    app.put("/update",async (req,res)=>{
        const newMovieName = req.body.newMovieName;
        const id = req.body.id; 
        try {
            await MovieModel.findById(id,(err, updatedMovie)=>{
                updatedMovie.movieName = newMovieName
                updatedMovie.save();
                res.send("update");

            });
        } catch(err){   
            console.log(err);
        }
        });

app.delete("/delete/:id",async(req,res)=>{
const id = req.params.id;

await MovieModel.findByIdAndRemove(id).exec();
res.send("deleted");
});

        

app.listen(5000,()=>{
    console.log("Server running on port 5000")
});

