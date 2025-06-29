$(document).ready(function () {
  $("#clone").on("click", function () {
    $("#parent h2").clone().prependTo("#child");
  });
});
