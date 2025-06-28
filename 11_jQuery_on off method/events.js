$(document).ready(function () {
  /* $("#parent").on("click", function () {
    $(this).css("background", "orange");
  }); */

  /*   $("#parent").on("mouseover mouseout", function () {
    $(this).toggleClass("changebg");
  }); */

  $("#parent").on({
    click: function () {
      $(this).css("background", "orange");
    },
    mouseover: function () {
      $(this).css("background", "pink");
    },
    mouseout: function () {
      $(this).css("background", "lightblue");
    },
  });

  $("button").click(function () {
    $("#parent").off("mouseover mouseout");
  });
});
