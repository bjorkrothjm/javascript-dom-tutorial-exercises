// Your code here
let list = document.querySelector("#parentLi");
let childs = list.childNodes;
console.log(childs);

let liTwo = childs[3];
liTwo.parentNode.removeChild(liTwo);