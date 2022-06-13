var images = document.querySelectorAll(".area-nav__icon-image");
var areaNav = document.querySelector(".area-nav");

window.addEventListener("scroll", () => {
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = areaNav.getBoundingClientRect();

  if (elemRect.top == 0) {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.add("area-nav__icon-image--shrink");
    }
  } else {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("area-nav__icon-image--shrink");
    }
  }
});
