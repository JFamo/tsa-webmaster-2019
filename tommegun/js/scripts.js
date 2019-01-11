window.onscroll = function() {scrollNavbar()};

var nav = document.getElementById("navbar");
var navblock = document.getElementById("navbarStaticBlock");
var sticky = nav.offsetTop;

//Stick navbar below scroll, compatible with older browsers
function scrollNavbar() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    navblock.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    navblock.style.display = "none";
  }
}
