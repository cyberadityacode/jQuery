/* 
  event data
    
*/
/* 
event.data property is used to pass additional data to an event handler when the event is triggered.
*/
// $(selector).on(eventType, data, handler);

$(document).ready(function () {
  $("#btn").on("click", { message: "Hello from event data!" }, function (e) {
    console.log(e.data.message);
  });
});
