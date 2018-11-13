import Movie from './entities/Movie.js'

const storage = {
    movies: [],
    totalLength: 0
}

const createMovie = (title, length, genre) => new Movie(title, length, genre);

const addMovie = (movie) => storage.movies.push(movie);


const calculateTotalLength = () => {
    let total = 0;
    for (let i = 0; i < storage.movies.length; i++) {
        total += parseInt(storage.movies[i].length);
    }
    storage.totalLength = total;
}

const getTotalLength = () => {
    calculateTotalLength();
    return storage.totalLength;
}

export {
    createMovie,
    addMovie,
    getTotalLength
};
