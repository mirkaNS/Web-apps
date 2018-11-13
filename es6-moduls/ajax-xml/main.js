const $text = document.querySelector(".someText").value;


const $button = document.querySelector(".button");
$button.addEventListener("click", function () {


    const httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", "./bit.xml", true);
    httpRequest.send()

    httpRequest.onload = function () {
        var xmlDoc = httpRequest.responseXML;  //to mi je ajax
        var from = xmlDoc.querySelector("city").textContent; //tu pretrazujem u ajaxu pa mi je zato xmlDoc.querySelector
        var print = document.querySelector("p");//ovde pretrazujewm dom
        print.textContent = from;

    }
});
