const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = (onSuccess, onError) => {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', API_ENDPOINT, true);

    httpRequest.onload = function () {
        if (httpRequest.status >= 200 && httpRequest.status < 300) {
            // Success!
            const responseData = httpRequest.responseText;
            const data = JSON.parse(responseData);
            console.log(data);
        } else {
            // We reached our target server, but it returned an error
            console.error('Data error');
            onError('Data error');
        }
    };

    httpRequest.onerror = function () {
        // There was a connection error of some sort
        console.error('Data error');
    };

    httpRequest.send();
}

export {
    fetchData
}