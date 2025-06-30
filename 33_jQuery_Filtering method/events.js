/* 
   Filtering methods
    first(), last(), eq(), filter(), not(), slice()
*/

$(document).ready(function () {
  // targets first p of entire page

  // $("p").first().css("background", "gold");
  // $("p").last().css("background", "silver"); //last p

  // target 3rd element using equation

  // $("ul li").eq(2).css("background", "red");
  // $("ul li").eq(-2).css("background", "red"); //targets 2nd last

  // filter - target that paragraph who has test class
  // $("p").not(".test").css("background", "red"); //target those para which doesnt have test class

  // $("ul li").slice(2).css("background", "red"); //target elements after 2nd index
  $("ul li").slice(1,3).css("background", "red"); //target element with index 1 to 3


});
