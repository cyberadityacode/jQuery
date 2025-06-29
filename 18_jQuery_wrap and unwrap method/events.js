$(document).ready(function () {
  $("#wrap").on("click", function () {
    $("span").wrap("<h1></h1>");
  });
  $("#unwrap").on("click", function () {
    $("span").unwrap();
  });
});
