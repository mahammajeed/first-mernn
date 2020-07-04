window.onload= function() {
    var btn= document.getElementById("btnAdd");
    btn.onclick= handleAdd();
}

function handleAdd() {
    var newTodo= document.getElementById("newTodo").value;
    var todos= document.getElementById("todos");
    var newTodoText= document.createTextNode(newTodo);
    var newLi= document.createElement("li");
    newLi.appendChild(newTodoText);
    todos.appendChild(newLi);

}
