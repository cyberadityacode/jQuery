$(document).ready(function () {
  $("#replaceWith").on("click", function () {
    $("#parent h2").replaceWith("<h1>cyberaditya</h1>");
  });
  $("#replaceAll").on("click", function () {
    $("#parent").replaceWith("<h1>cyberaditya</h1>");
  });
});
