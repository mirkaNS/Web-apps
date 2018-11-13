
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


export {
    collectFormInput,
    displayMovie,
    displayTotalLength
}

