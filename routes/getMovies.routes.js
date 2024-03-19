import express from 'express';
import Movie from '../models/movie.model.js';

const router = express.Router();


router.post('/', async (req, res) => {
    let payload = req.body.payload;
    let search = await Movie.find({ movie_title: { $regex: new RegExp('^' + payload + '.*', 'i') } }).exec();
    // console.log(payload);
    //Limit Search to 10 results
    search = search.slice(0, 15);
    res.send({ payload: search });
})

export default router;