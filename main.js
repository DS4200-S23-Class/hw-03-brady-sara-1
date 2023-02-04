
// button function
let count = 1;
function buttonClicked() {
	let header = document.getElementById("header");
	if (count == 1) {
		header.style.color = "blue";
		count = 0;
	}
	else {
		header.style.color = "black";
		count = 1;
	}
}
