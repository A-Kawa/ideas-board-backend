export default function editPorpsFunction (ideas, reqBody){
    
    ideas.ideas = reqBody.ideas;
    ideas.categories = reqBody.categories;

    return ideas;
};