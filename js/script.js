function showMenu() {
  let menu = document.getElementById("topMenu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

/**
 * show submenu based on screen width
 * if screen width is less than 600px, use another style
 * @param {*} event
 */
function showSubMenu(event) {
  $(".dropdown-content").removeClass(["wide", "narrow"]);
  if ($(window).width() > 600) {
    // if screen width > 600px, add wide class to dropdown submenu
    $(event.target).next(".dropdown-content").addClass("wide");
  } else {
    $(event.target).next(".dropdown-content").addClass("narrow");
  }
}

// homepage slide images change functions
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
// homepage slide images  functions
function showSlides(n) {
  let slides = $(".mySlides");
  let dots = $(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
