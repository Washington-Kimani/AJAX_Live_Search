import express from 'express';
import http from 'http';
import Movie from './models/movie.model.js';
import connectToDB from './controllers/connectDB.js'
import getMovies from './routes/getMovies.routes.js'

const port = process.env.PORT || 5050,
    app = express(),
    server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use('/getMovies', getMovies)


//Connect to DB
connectToDB();

//Home route
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/save', async (req, res) => {
    res.render('save', { message: '' })
})
app.post('/save', async (req, res) => {
    try {
        const { data } = req.body;
        const newFruit = new Movie({ name: data });
        await newFruit.save();
        res.redirect('/save', { message: '' })
    } catch (error) {
        res.render('save', { message: error._message })
    }
})


server.listen(port, () => console.log(`Server is running on port ${port}`));