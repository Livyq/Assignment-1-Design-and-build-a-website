$(document).ready(function () {
  $(".testimonials-box").on({
    mouseenter: function () {
      $(this).siblings(".testimonials-box").removeClass("selected");
      $(this).find(".testimonials-text").show(1000);
    },
    mouseleave: function () {
      $(this).siblings(".testimonials-box").addClass("selected");
      $(this).find(".testimonials-text").hide(800);
    },
  });
});
