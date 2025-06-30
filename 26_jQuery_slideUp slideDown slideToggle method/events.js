$(document).ready(function () {
  $("#slideUp").click(function () {
    // $("#parent").slideUp();

    // 1st Parameter - speed()
    // $("#parent").slideUp(3000);
    // $("#parent").slideUp("slow");

    $("#parent").slideUp(3000, function () {
      console.log("callback function runs after slideUp");
    });
  });

  $("#slideDown").click(function () {
    $("#parent").slideDown();
  });

  $("#slideToggle").click(function () {
    $("#parent").slideToggle();
  });
});
