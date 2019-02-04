import express from 'express';
import movieRouter from './Routes/movieRoutes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;
const db = mongoose.connect('mongodb://Andrew2:iatsu666@ds233763.mlab.com:33763/ecp-api');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/Movies',movieRouter);
app.use((req,res,next) => {
   res.status(404).send('Wrong path, youre lost!')
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});