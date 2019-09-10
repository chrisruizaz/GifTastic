console.log("Im attached");
//I want to create an array of buttons
var gifButtons = [`r2d2`, `c3po`, `solo`, `chewie`, `luke`];
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
    console.log(a);
  }
}
$("#add-gif").on("click", function(event) {
  console.log(event);
  event.preventDefault();
  var gifSearch = $("#search-input")
    .val()
    .trim();
  gifButtons.push(gifSearch);
  console.log(gifButtons);
  console.log(gifSearch);
  renderButtons();
});
renderButtons();
//buttons will contain gifs from api
//
////Ajax call to the API
var queryURL =
  `https://api.giphy.com/v1/gifs/` +
  gifButtons +
  `?api_key=SBDVZzF2iQmWatKX1P3LaBWWkEjJnb7D&q=r2d2&limit=25&offset=0&rating=G&lang=en`;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  $("#movie-view").text(JSON.stringify(response));
});
//how do I get the API search through my Array in an onclick of my Gifs
//figure out how to play and pause Gifs
