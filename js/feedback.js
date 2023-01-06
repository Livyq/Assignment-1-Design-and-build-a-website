$(document).ready(function () {
  let selectedRating = "Very Satisfied";

  $(".rating").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    selectedRating = $(this).find("small").text();
  });

  $("#send").click(function () {
    $(".feedback-form").hide(200);
    $("#feedback-text").text(selectedRating);
    $(".feedback-text").show(600);
  });
});
