import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const movieModel = new Schema({
    title: String,
    director: String,
    writers: [{name: String}],
    music: [{name: String}],
    description: String,
    category: String,
    length: Number,
    releaseDate: Date,
    country: String,
    score: Number,
    linkToPic: String,
    comments: [String],
    actors: [{name:String, role: String}],
    popularity: Number,
});

export default mongoose.model('movies',movieModel);