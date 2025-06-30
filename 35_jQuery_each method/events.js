/* 
  each()
    
*/

$(document).ready(function () {
  $("li").each(function () {
    console.log($(this).text());
  });
});
