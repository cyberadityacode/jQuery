$(document).ready(function () {
  $("#scrollTop").click(function () {
    console.log($("#parent").scrollTop());
  });
  $("#scrollLeft").click(function () {
    console.log($("#parent").scrollLeft());
  });
});
