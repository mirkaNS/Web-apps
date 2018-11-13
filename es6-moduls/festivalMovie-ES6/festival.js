

const uiModule = (() => {
    const $movieTitle = document.querySelector("#title");
    const $movieLength = document.querySelector("#length");
    const $movieGenre = document.querySelector("#genre");
    const $movieList = document.querySelector(".movie-list");
    const $movieTotalLength = document.querySelector(".movie-totalLength");

    // function getTitle() {
    //     return $movieTitle.value;
    // }
    // function getLength() {
    //     return $movieLength.value;
    // }

    const collectFormInput = () => {
        return {
            title: $movieTitle.value,
            length: $movieLength.value,
            genre: $movieGenre.value
        }
    }

    const displayMovie = (movie) => $movieList.innerHTML += movie.getInfo() + '<br>';


    const displayTotalLength = (totalLength) => $movieTotalLength.textContent = totalLength;


    return {
        collectFormInput,
        displayMovie,
        displayTotalLength
    }

})();

const controller = ((data, ui) => {

    const init = () => {
        console.log('App initializing');
        setupEventListener();
    }

    const setupEventListener = () => {
        const $addMovie = document.querySelector("#button");
        $addMovie.addEventListener("click", onAddMovieHandler);
    }

    const updatedTotalMoviesLength = () => {
        totalLength = dataModule.getTotalLength();
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
    return {
        init
    }

})(dataModule, uiModule);