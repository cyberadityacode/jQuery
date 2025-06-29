$(document).ready(function () {
  $("#appendTo").on("click", function () {
    $("<h1>cyberaditya</h1>").appendTo("#parent");
  });
  $("#prependTo").on("click", function () {
    $("<h1>cyberaditya</h1>").prependTo("#parent");
  });
});
