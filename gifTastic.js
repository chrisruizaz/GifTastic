console.log("Im attached");
//I want to create an array of buttons
var gifButtons = [`r2d2`];
//I want the buttons to show up under the search bar
// $(".container").append(gifButtons);
//buttons should contain what was searched
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < gifButtons.length; i++) {
    var a = $("<button>");
    a.addClass("btn btn-secondary m-4 gif");
    a.attr("data-name", gifButtons[i]);
    a.text(gifButtons[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gifSearch = $("#search-input")
    .val()
    .trim();
  gifButtons.push(gifSearch);

  renderButtons();
});
renderButtons();
//buttons will contain gifs from api
//
////Ajax call to the API
$(document).on("click", ".gif", function() {
  var character = $(this).attr("data-name");
  var queryURL =
    `https://api.giphy.com/v1/gifs/search?api_key=SBDVZzF2iQmWatKX1P3LaBWWkEjJnb7D&q=` +
    character +
    `&limit=5&offset=0&rating=G&lang=en`;
  console.log(queryURL);
  $("#gifs-view").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (i = 0; i < 5; i++) {
      var imageUrl = response.data[i].images.original.url;
      console.log(imageUrl);
      var gifImage = $("<img>");
      gifImage.attr("src", imageUrl);
      gifImage.attr("alt", "starwars image");

      $("#gifs-view").append(gifImage);
      //$("#buttons-view").text(JSON.stringify(response));
      console.log(gifImage);
    }
    var stillUrl = response.data[i].images.original_still.url;
    gifImage.attr("src", stillUrl);
    gifImage.attr("gif-switch", "off");
    gifImage.attr("still-gif", stillUrl);
  });
});
//I cannot get this function to work at all. I feel like it makes sense and its right there but I just keep brea
//$(".gif").on("click", function() {
//gifImage.attr("gif", imageUrl);
// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//var state = $(this).attr("data-state");
// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
// Else set src to the data-still value
//if (state === "still") {
// $(this).attr("src", $(this).attr("data-animate"));
//$(this).attr("data-state", "animate");
// } else {
// $(this).attr("src", $(this).attr("data-still"));
// $(this).attr("data-state", "still");
// }
//});
//how do I get the API search through my Array in an onclick of my Gifs
//figure out how to play and pause Gifs
