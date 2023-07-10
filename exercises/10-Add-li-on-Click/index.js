let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const newLi = document.createElement("li");
	let myList = document.getElementById("myList");
	newLi.innerHTML = "Forth element"
	myList.appendChild(newLi)

});
