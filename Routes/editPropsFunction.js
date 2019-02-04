export default function editPorpsFunction (movie, reqBody){
    movie.comments = reqBody.comments;
    movie.title = reqBody.title;
    movie.director =reqBody.director;
    movie.writers = reqBody.writers;
    movie.music = reqBody.music;
    movie.description = reqBody.description;
    movie.category = reqBody.category;
    movie.length = reqBody.length;
    movie.releaseDate = reqBody.releaseDate;
    movie.country = reqBody.country;
    movie.score = reqBody.score;
    movie.linkToPic = reqBody.linkToPic;
    movie.actors = reqBody.actors;
    movie.popularity = reqBody.popularity;

    return movie;
};