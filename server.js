import express from 'express';
import ideasRoutes from './Routes/ideasRoutes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {login, password} from "./mongoDBpass";

const app = express();
const port = process.env.PORT || 3001;
const db = mongoose.connect("mongodb://"+login+":"+password+"@ds042459.mlab.com:42459/ideas-board", {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/ideas',ideasRoutes);
app.use((req,res,next) => {
   res.status(404).send('Wrong path, youre lost!')
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});