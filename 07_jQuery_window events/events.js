$(document).ready(function () {
  $(".box").scroll(function () {
    console.log("scrolling");
  });
  $(window).resize(function () {
    console.log("resizing");
  });
});
