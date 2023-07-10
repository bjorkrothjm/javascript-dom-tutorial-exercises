// Your code here


let listLi = document.getElementsByTagName("li");
console.log(listLi);

let clickEvent = (item) => {
    console.log(item);
};

listLi.forEach((item) => {
    item.addEventListener('click', clickEvent);
});



