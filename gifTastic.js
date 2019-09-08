console.log("Im attached");
//I want to create an array of buttons
var gifButtons = [`r2d2`, `c3po`, `solo`, `chewie`, `luke`];
//I want the buttons to show up under the search bar
// $(".container").append(gifButtons);
console.log(gifButtons);
//buttons should contain what was searched
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < gifButtons.length; i++) {
    var a = $(`<button>`);
    a.addClass(`movie`);
    a.attr(`data-name`, gifButtons[i]);
    a.text(gifButtons[i]);
    $(`#buttons-view`).append(a);
  }
}
$(`#add-movie`).on(`click`, function(event) {
  console.log(event);
  event.preventDefault();
  var gifSearch = $(`movie-input`).val();
  gifButtons.push(gifSearch);
  console.log(gifButtons);
  console.log(gifSearch);
  renderButtons();
});
renderButtons();
//buttons will contain gifs from api
//
