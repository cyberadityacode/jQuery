$(document).ready(function () {
  $("#fadeIn").click(function () {
    $("#parent").fadeIn("slow");
  });
  $("#fadeOut").click(function () {
    // $("#parent").fadeOut("slow");
    // $("#parent").fadeOut(3000);
    // another parameter callback function which will be executed after passed time

    $("#parent").fadeOut(3000, function () {
      console.log("faded out after 3s");
    });
  });
  $("#fadeToggle").click(function () {
    $("#parent").fadeToggle();
  });
  $("#fadeTo").click(function () {
    // $(selector).fadeTo(speed,opacity,callback);
    $("#parent").fadeTo(2000, 0.5, function(){
      console.log("fade to after 2s");
    });
  });
});
