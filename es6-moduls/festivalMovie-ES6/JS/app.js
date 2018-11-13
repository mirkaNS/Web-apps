import * as dataModule from "./data.js"
import * as uiModule from "./ui.js"

const init = () => {
    console.log('App initializing');
    setupEventListener();
}

const setupEventListener = () => {
    const $addMovie = document.querySelector("#button");
    $addMovie.addEventListener("click", onAddMovieHandler);
}

const updatedTotalMoviesLength = () => {
    const totalLength = dataModule.getTotalLength();
    uiModule.displayTotalLength(totalLength);

}

const onAddMovieHandler = () => {

    // collect form data
    const movieObj = uiModule.collectFormInput();
    const { title, length, genre } = movieObj;

    // validate input

    // create Movie instance
    const newMovieInstance = dataModule.createMovie(title, length, genre);

    // add movie to list
    dataModule.addMovie(newMovieInstance);

    // display movie
    uiModule.displayMovie(newMovieInstance);

    //display total length
    updatedTotalMoviesLength();


    // reset form
}
export {
    init
}

