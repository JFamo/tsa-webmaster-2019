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

function flipMerch(item){
	var elem;
	if(item=="hoodie"){
		elem = document.getElementById("merch-hoodieimg");
		if(elem.src.includes("merch-hoodiefront")){
			elem.src = "../images/merch-hoodieback.png";
		}
		else{
			elem.src = "../images/merch-hoodiefront.png";
		}
	}
	else if(item=="tshirt"){
		elem = document.getElementById("merch-shirtimg");
		if(elem.src.includes("merch-tshirtfront")){
			elem.src = "../images/merch-tshirtback.png";
		}
		else{
			elem.src = "../images/merch-tshirtfront.png";
		}
	}
}