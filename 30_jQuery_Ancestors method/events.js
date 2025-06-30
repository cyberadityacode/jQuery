/* 
    Ancestor Methods
    Descendant Methods
    Sibling Methods
    Filtering Methods

    1. Ancestor Methods
        parent(), parents(), parentsUntil(), closest(), offsetParent()
  */

$(document).ready(function () {
  // $(".child-C").parent().css("background", "red"); //apply css property to child-C parent
  // inner
  // $("#inner").parent().css("background", "red"); //apply css property to inner's parent
  // apply to all parents -> i.e, parent > parent ...
  // $("#inner").parents().css("background", "red"); //apply css property to inner parental lineage
  // apply to parents upto
  // $("#inner").parents("#main-outer").css("background", "red"); //apply css property from to inner's for main-outer

  //parentsUntil
  // $("#inner").parentsUntil("#main-outer").css("background", "red"); //apply css property from inner to main-outer

  // first positioned parent using offset

  // $(".child-C").offsetParent().css("background", "red");

  $(".child-C").closest('div').css("background", "red");
});
