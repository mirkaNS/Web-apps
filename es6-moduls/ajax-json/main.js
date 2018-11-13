const request = new XMLHttpRequest();
const image = document.createElement('img');

const button = document.querySelector('.button');

button.addEventListener('click', random);

function random() {
    request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const data = JSON.parse(request.responseText);
            const msg = data.message;
            image.src = msg;
            document.querySelector('.gallery').appendChild(image);
        }

    }


    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();
}