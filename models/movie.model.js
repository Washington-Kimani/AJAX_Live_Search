import mongoose  from 'mongoose';

const movieSchema = new mongoose.Schema({
    movie_genre:{
        type: String,
        required: true
    },
    movie_title:{
        type: String,
        required: true
    },
});

const Movie  = mongoose.model('Movie', movieSchema);

export  default Movie;