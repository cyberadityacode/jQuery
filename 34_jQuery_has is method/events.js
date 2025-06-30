/* 
   has() is()
    
*/

$(document).ready(function () {
  $("p").has("b").css("color", "red");

  if ($("p").is(".test")) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
