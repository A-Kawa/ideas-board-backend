import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ideasModel = new Schema({
    title: String, 
    description: String, 
    category: String
});

export default mongoose.model('ideas',ideasModel);