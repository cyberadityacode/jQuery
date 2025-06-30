/* 
  event Type
    
*/

$(document).ready(function () {
  $("#result").on("click dblclick mouseover mouseout", function (event) {
    $("h2").html("Event: " + event.type);
  });
});
