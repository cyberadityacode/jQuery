/* 
  event target
    
*/

$(document).ready(function () {
  $(document).click(function (e) {
    $("#result").html("Target Element : " + e.target.nodeName);
  });
});
