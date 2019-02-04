import express from 'express';
import Movie from '../MongoDB/movieModel';
import editPropsFunction from './editPropsFunction';

const movieRouter = express.Router();
movieRouter
    .get('/', (req, res) => {
        if(req.query.id){
            Movie.findById(req.query.id, (err,movie)=> {
                res.json(movie);
            })
        }else{
            Movie.find({}, (err, movies) => {
                console.log(movies);
                res.json(movies);
            })
        }
    })
    .post('/add',(req,res)=> {
        let movie = new Movie(req.body);
        movie.save();
        res.status(201).send(movie);
    })

    .put('/edit', (req,res) => {
        if(req.query.id){
            Movie.findById(req.query.id,(err,movie)=> {
                movie = editPropsFunction(movie,req.body);
                movie.save();
                res.json(movie);
            })
        }else{
            res.status(404).send('Error no id');
        }
    })
    .delete('/delete', (req,res) => {
        Movie.findById(req.query.id, (err,movie) => {
            movie.remove(err=> {
                if(err){res.status(500).send(err)}else{res.status(204).send('removed')}
            })
        })
    });
export default movieRouter;