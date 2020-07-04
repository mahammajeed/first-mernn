$ ( function() {
$ ("#addButton").click(handleBtnClick)
//$ ("#todos li").click(removeMe)
$ ("#todos").on("click","li",removeMe);
});

function handleBtnClick() {
//alert("btn clicled");
var newTodo= $("#newTodo").val();
if(!newTodo) {
    $("#newTodo").addClass("error");
    return;
}
$ ("#todos").append("<li>" + newTodo + "</li>");
//$ ("#todos li").click(removeMe);

}

function removeMe() {
    $ (this).remove(); 
}