let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newLi = document.createElement("li")
	newLi.innerHTML = "Forth element"
	let myList = document.getElementById("myList")
	myList.appendChild(newLi)


});
