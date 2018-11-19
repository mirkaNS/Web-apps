const $input = $("input");
const $button = $("button");
const $gallery = $(".gallery");

$button.on("click", search);

function search() {
    $gallery.html("")
    const inputVal = $input.val();

    const request = $.ajax({
        url: "https://api.github.com/search/users?q=" + inputVal
    });

    request.done(function (data) {
        for (let i = 0; i < data.items.length; i++) {
            $img = $("<img>");
            $img.attr("src", data.items[i].avatar_url);
            $gallery.append($img);
        }
    })
}

