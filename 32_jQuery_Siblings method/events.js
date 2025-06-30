/* 
    siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), prevUntil()
*/

$(document).ready(function () {
  // apply css to all siblings
  // $(".child-C").siblings().css("background", "red");

  // apply css to next siblings
  // $(".child-C").next().css("background", "red");

  // apply css to next ALL siblings
  // $(".child-C").nextAll().css("background", "red");

  // apply css to next Until siblings
  // $(".child-C").nextUntil(".until-E").css("background", "red");

  // apply css to prev sibling
  // $(".child-C").prev().css("background", "red");

  // apply css to prevAll sibling
  // $(".child-C").prevAll().css("background", "red");

  // apply css to prev Until sibling
  $(".until-E").prevUntil(".child-C").css("background", "red");
});
