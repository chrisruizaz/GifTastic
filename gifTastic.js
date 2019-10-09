console.log("Im attached");
//I want to create an array of buttons
var gifButtons = [`r2d2`];
function renderButtons() {
  var a = $("<button>");
  //
  for (var i = 0; i < gifButtons.length; i++) {
    a.addClass("btn btn-secondary m-4 gif");
    a.attr("data-name", gifButtons[i]);
    a.text(gifButtons[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-gif").on("click", function(event) {
  var gifSearch = $("#search-input")
    .val()
    .trim();
  event.preventDefault();

  gifButtons.push(gifSearch);

  renderButtons();
});
renderButtons();
function displayGif(response) {
  //
  console.log(response);
  var results = response.data;
  for (i = 0; i < results.length; i++) {
    var resultDiv = $("<div>");
    var gifImage = $("<img>");
    //
    gifImage.attr("src", results[i].images.fixed_height_still.url);
    gifImage.attr("class", "starwars-gif");
    //
    gifImage.attr("data-state", "still"); //new
    //
    gifImage.attr("data-animate", results[i].images.fixed_height.url); //new
    gifImage.attr("data-still", results[i].images.fixed_height_still.url); //new
    resultDiv.append(gifImage);
    $("#gifs-view").prepend(resultDiv);
    console.log(gifImage);
  }
}
function starwarsCall() {
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
    //
    //
  }).then(displayGif);
}
$(document).on("click", ".gif", starwarsCall);
$(document).on("click", ".starwars-gif", function gifAnimate() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
