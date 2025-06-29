$(document).ready(function () {
  // empty the content inside parent id div
  $("#handleEmpty").on("click", function () {
    $("#parent").empty();
  });

  // remove the parent div
  $("#handleRemove").on("click", function () {
    $("#parent").remove();
  });
});
