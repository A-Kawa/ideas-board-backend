import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ideasModel = new Schema({
    ideas: [{title: String, description: String, category: String}],
    categories: [{name:String}]
});

export default mongoose.model('ideas',ideasModel);