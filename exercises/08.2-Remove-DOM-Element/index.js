// .childNodes
// This returns: NodeList (an array) with 6 items 

// let list = document.querySelector("#parentLi");
// let childs = list.childNodes;
// console.log(childs)

// list.removeChild(childs[3]);



// You could use .children instead of .childNodes to get just the elements:
// This returns: HTML collection with 2 items 

let list = document.querySelector("#parentLi");
let childs = list.children;
console.log(childs)

list.removeChild(childs[1]);