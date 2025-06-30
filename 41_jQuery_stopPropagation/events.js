/* 
  event preventDefault
    
*/

$(document).ready(function () {
  $(".box").click(function (e) {
    console.log("box clicked");
  });

  $("p").click(function (e) {
    console.log("p clicked");
  });

  $("button").click(function (e) {
    e.stopPropagation();
    console.log("button clicked");
  });
});
