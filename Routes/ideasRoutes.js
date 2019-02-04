import express from 'express';
import Ideas from '../MongoDB/ideasModel';
import editPropsFunction from './editPropsFunction';

const ideasRouter = express.Router();
ideasRouter
    .get('/', (req, res) => {
        if(req.query.id){
            Ideas.findById(req.query.id, (err,ideas)=> {
                res.json(ideas);
            })
        }else{
            Ideas.find({}, (err, ideas) => {
                console.log("xd");
                res.json(ideas);
                if(err){res.status(500).send(err)}
            })
        }
    })
    .post('/add',(req,res)=> {
        let ideas = new Ideas(req.body);
        ideas.save();
        res.status(201).send(ideas);
    })

    .put('/edit', (req,res) => {
        if(req.query.id){
            Ideas.findById(req.query.id,(err,ideas)=> {
                ideas = editPropsFunction(ideas,req.body);
                ideas.save();
                res.json(ideas);
            })
        }else{
            res.status(404).send('Error no id');
        }
    })
    .delete('/delete', (req,res) => {
        Ideas.findById(req.query.id, (err,ideas) => {
            ideas.remove(err=> {
                if(err){res.status(500).send(err)}else{res.status(204).send('removed')}
            })
        })
    });
export default ideasRouter;