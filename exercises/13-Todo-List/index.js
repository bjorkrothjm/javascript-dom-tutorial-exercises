// Your code here

const inputObj = document.querySelector("#addToDo");
const todoList = document.querySelector("ul")

inputObj.addEventListener('keydown', function (e) {
    if (e.key === "Enter"){
        addTask();
    }
});

todoList.addEventListener("click", deleteTask);

function addTask(){
    console.log(inputObj.value);
    let taskText = inputObj.value.trim()
    taskText = " " + taskText; // added to format li as other lis
    let newLi = document.createElement("li")
    newLi.innerHTML = "<span><i class='fa fa-trash'></i></span>" + taskText;
    todoList.appendChild(newLi);
    inputObj.value = "";
}
    
function deleteTask(e){
    //console.log(e.target);
    //console.log(e.target.classList);
    const clickedElement = e.target;
    // Assumption in if: clicks on <i>, not sufficient to click on <span>
    if (clickedElement.classList.contains("fa-trash")){
        console.log(clickedElement.parentElement.parentElement);
        const listItem = clickedElement.parentElement.parentElement; // go up 2 levels to the the <li>: 1st lvl = <span> 2nd lvl = <li>
        todoList.removeChild(listItem)
    }
}