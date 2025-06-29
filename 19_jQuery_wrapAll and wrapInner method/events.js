$(document).ready(function () {
  $("#wrapAll").on("click", function () {
    $("span").wrapAll("<h1></h1>");
  });

  $("#wrapInner").on("click", function () {
    $("span").wrapInner("<b></b>");
  });
});
