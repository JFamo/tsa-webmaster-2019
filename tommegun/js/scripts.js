window.onscroll = function() {scrollNavbar()};

var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;

//Stick navbar below scroll, compatible with older browsers
function scrollNavbar() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
