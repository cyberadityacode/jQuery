$(document).ready(function () {
  $("#username , #age, #city").focus(function () {
    $(this).css("background-color", "lime");
  });
  $("#username , #age, #city").blur(function () {
    $(this).css("background-color", "");
  });

  // change is used with select element

  $("#city").change(function () {
    const cityName = $(this).val();
    $("#output").html(cityName);
  });

  //   Select- work mostly with text

  $("#username, #age").select(function () {
    $(this).css("background-color", "yellow");
  });

  //   Submit form

  $("#fSubmit").submit(function (e) {
    e.preventDefault();
    console.log("form submitted");
  });
});
