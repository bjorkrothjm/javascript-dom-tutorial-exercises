// Your code here

let myP  = document.createElement("p");
myP.style.background = "yellow";
myP.innerHTML = "Hello World";
document.body.appendChild(myP);

// //WORKING
// const t = document.createTextNode("Hello World");
// myP.appendChild(t);
// console.log(myP)

// //NOT WORKING - WHY ? 
// const theBody = document.getElementsByTagName("body");
// console.log(theBody);
// theBody.appendChild(myP);
// console.log(theBody);
