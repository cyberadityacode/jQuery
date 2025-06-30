/* 
    Children and find method

*/

$(document).ready(function () {
  // $("#inner").children().css("background", "red");
  // $("#inner").children(".child-C").css("background", "red");

  // find method will find children, grand children, great grand children
  $("#inner").find(".child-C").css("background", "red");

});
