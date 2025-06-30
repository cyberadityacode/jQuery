/* 
  pageX() and pageY()
    
*/

$(document).ready(function () {
  $(document).mousemove(function (event) {
    $("#result").text("X: " + event.pageX + " Y: " + event.pageY);

    let x = event.pageX;
    let y = event.pageY;

    $("#box").offset({ top: y, left: x });
  });
});
