$(document).ready(function () {
  /* 
  Using this animate method you can animate any HTML tag
  $(selector).animate({params}, speed, callback);
  
  within params you specify css property (except color and background-color)
  property name must be in camelCase
  */

  $("#animate").click(function () {
    $("#parent").animate(
      { fontSize: "25px", left: "150px", width: "+=100px" },
      2000,
      function () {
        console.log("Callback after animation");
      }
    );
  });
});
