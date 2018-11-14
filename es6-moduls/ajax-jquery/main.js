const $input = $("#text");
var $button = $("#button");
const $gallery = $(".gallery");

$button = addEventListener("click", some);


function some() {
    const $inputVal=$input.val();
    const request = $.ajax({
        url: "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000"+ $inputVal
    });

    request.done(function(data){
        for(let i=0;i<data.items.length;i++){
            $img=$("<img>");
            $img.attr("src",data.items[i].avatar_url);
            $gallery.append($img);
        }
    })
}

