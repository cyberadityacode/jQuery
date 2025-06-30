$(document).ready(function () {
  $("#chaining").click(function () {
    $("#parent")
      .css("color", "red")
      .slideUp(3000, function () {
        console.log("slide up done");
      })
      .slideDown(3000, function () {
        console.log("slideDown done");
      });
  });
});
