/* 
  event preventDefault
    
*/

$(document).ready(function () {
  $("#linkOne").click(function (e) {
    e.preventDefault();

    const a = e.isDefaultPrevented();
    console.log(a);
  });
});
