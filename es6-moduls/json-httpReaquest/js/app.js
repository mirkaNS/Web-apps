import * as data from "./data.js";
import * as ui from "./ui.js";

const init = () => {
    console.log("App initialized");
    //fetch data from internet
    data.fetchData(handleSuccess, handleError);

    // data.fetchData(
    //     function (postList) {
    //         console.log("my data controller", postList);
    //         ui.displayPosts(postList);
    //     },
    //     function (errorStr) {
    //         //ui.displayError()
    //     }
    // )
}

function handleSuccess(postList) {
    console.log("my data controller", postList);
    ui.displayPosts(postList);
}

function handleError() {
    //ui.displayError()
}

export {
    init
}