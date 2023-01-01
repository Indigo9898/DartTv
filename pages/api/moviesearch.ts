import axios from "axios";

const searchMovies = async (movieSearch:string) => {
    const movie = movieSearch.replace(/\s/g, '%20');
    
    const query = "https://api.themoviedb.org/3/search/tv?api_key=b72c4d57c9bbfb0ea10e0dd7cceab38e&language=en-US&page=1&query=" + movie + "&include_adult=false";
    var  response = await axios(query);
    
    const result  = response.data.results;
    return result;

}


const getShowDetails = async (movieId:string) => {
    const query = "https://api.themoviedb.org/3/tv/" + movieId + "?api_key=b72c4d57c9bbfb0ea10e0dd7cceab38e&language=en-US"
    var  response = await axios(query);
    const result  = response.data;
    return result;

}

export {searchMovies, getShowDetails}