const $input = $("#text");
const $button = $("#button");
const $gallery = $(".gallery");

const $button = addEventListener("click", some);


function some() {

    const request = $.ajax({
        url: "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000",
        method: "GET",
        dataType: "html"
    });
}

