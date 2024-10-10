import { MOVIEDB_API_KEY } from 'astro:env/server';

export const getTrendingMovies = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIEDB_API_KEY}`);
    const data = await res.json();
    const movies = await data.results;

    return movies;
}

export const getNewContentFromDisney = async() => {
    const movieRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc`);
    const movieData = await movieRes.json();
    const movies = await movieData.results;

    const serieRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${MOVIEDB_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc`);
    const serieData = await serieRes.json();    
    const series = await serieData.results;

    const combinedData = [...movies, ...series];
    const limitedData = combinedData.slice(0, 28);
    
    return limitedData;
}