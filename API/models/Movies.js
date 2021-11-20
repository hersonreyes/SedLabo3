const  mongoose  = require("mongoose");

const MoviesSchema = new mongoose.Schema (
    {
        movieName: {
            type: String, 
            require: true,
        },
    }
);

const Movie = mongoose.model("MovieData",MoviesSchema);
module.exports = Movie;