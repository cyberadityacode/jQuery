$(document).ready(function () {
  /* 
    get method is used to get value from dom elements
    text(), html(), attr(), val()
  */

  const parentHTML = $(".parent").html();
  const parentText = $(".parent").text();
  const parentAttributeClass = $(".parent").attr("class");
  const parentAttributeData = $(".parent").attr("data-something");
  console.log(parentHTML);
  console.log(parentText);
  console.log(parentAttributeClass);
  console.log(parentAttributeData);

  // form

  $("#sampleForm").submit(function (e) {
    e.preventDefault();
    const username = $("#username").val();
    const age = $("#age").val();
    const city = $("#city").val();

    console.log(username, age, city);
  });
});
