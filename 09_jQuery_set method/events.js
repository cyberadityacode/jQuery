$(document).ready(function () {
  /* 
    set method is used to set value of dom elements
    text(), html(), attr(), val()
  */

  // automatically fills username on document load

  $("#username").val("Aditya Dubey");
  $("#city").val("bhopal");

  $("#handleHeading").click(function () {
    $("h1").text("Aditya Dubey");

    // Adding attributes to the element

    $("h1").attr("class", "headingClass");
  });

  // Adding attributes to the element
});
