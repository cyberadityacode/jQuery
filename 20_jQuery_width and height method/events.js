$(document).ready(function () {
  /* 
  width = content width
  innerWidth = inner width of the div
  outWidth = outer width of the div
  */

  $("#width").on("click", function () {
    console.log($("#parent").width());
    console.log($("#parent").innerWidth());
    console.log($("#parent").outerWidth());
    console.log($("#parent").outerWidth(true));
  });

  $("#height").on("click", function () {
    console.log($("#parent").height());
    console.log($("#parent").innerHeight());
    console.log($("#parent").outerHeight());
    console.log($("#parent").outerHeight(true));
  });
});
