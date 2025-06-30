$(document).ready(function () {
  /* 
  stop animation in the process
  */

  $("#animate").click(function () {
    $("#parent").animate(
      { left: "+=300px", width: "+=300px" },
      3000,
      function () {
        console.log("Animation Completed");
      }
    );
  });

  // stop animation
  $("#stop").click(function () {
    // $("#parent").stop(); //stops only first animation
    // $("#parent").stop(true); //to stop all animation
    $("#parent").stop(true,true); //when you want animation to reach final stage
  });
});
