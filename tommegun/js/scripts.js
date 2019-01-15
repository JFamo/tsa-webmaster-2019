window.onscroll = function() {scrollNavbar()};

var nav = document.getElementById("navbar");
var navblock = document.getElementById("navbarStaticBlock");
var sticky = nav.offsetTop;

var mycart = {};
var totalcost = 0;

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

function addToCart(itemname, cost){
	totalcost += cost;
	if(mycart.hasOwnProperty(itemname)){
		mycart[itemname] += 1;
	}
	else{
		mycart[itemname] = 1;
	}
	printCart();
}

function printCart(){
	var cartcontent = document.getElementById("cartContent");
	var cartcost = document.getElementById("cartCost");
	cartcontent.innerHTML = "";
	cartcost.innerHTML = "";

	for (var property in mycart) {
	    if (mycart.hasOwnProperty(property)) {
	        cartcontent.innerHTML += mycart[property] + ". " + property + "<br>";
	    }
	}	
	cartcost.innerHTML = "Total Cost : $" + parseFloat(Math.round(totalcost * 100) / 100).toFixed(2);;
}

function emptyCart(){
	var cartcontent = document.getElementById("cartContent");
	var cartcost = document.getElementById("cartCost");
	cartcontent.innerHTML = "Your Cart Is Empty!";
	cartcost.innerHTML = "Total Cost : $0.00";
	mycart = {};
	totalcost = 0;
}