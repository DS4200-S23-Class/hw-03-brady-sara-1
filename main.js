
// button function
let count = 1;
function buttonClicked() {
	let texts = document.getElementById("visualizations");
	if (count == 1) {
		texts.style.color = "blue";
		count = 0;
	}
	else {
		texts.style.color = "black";
		count = 1;
	}
}
