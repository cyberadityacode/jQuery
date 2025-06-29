$(document).ready(function () {
  /* 
  position = left and top position of div which contains content
  offset = left and top position of content inside the div
  */

  $("#position").on("click", function () {
    console.log($("#parent").position());
  });
  $("#offset").on("click", function () {
    console.log($("#parent").offset());
  });
});
