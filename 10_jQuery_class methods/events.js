$(document).ready(function () {
  /* 
    class method is used to set class of dom elements
    addClass(), removeClass(), toggleClass()
  */

  // add class
  $("#handleAddClass").click(function () {
    $("#parent").addClass("parent");
  });

  // remove class
  $("#handleRemoveClass").click(function () {
    $("#parent").removeClass("parent");
  });

  // toggle class
  $("#handleToggleClass").click(function () {
    $("#parent").toggleClass("parent");
  });

  $("#addStyles").click(function () {
    $("#parenthead").css({ "background-color": "yellow", color: "red" });
  });
});
