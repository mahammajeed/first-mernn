$ (function() {
loadrecipes();
$("#recipes").on("click", "btn btn-info" , handleDelete); 
$("#recipes").bind("click", function handleDelete(response){
  console.log("HandleDelete");
 }); 

}); 


function handleDelete() {
   
    var btn= $(this);
    var parentDiv= btn.closest(".recipe");
    let id= parentDiv.attr("data-id");
    console.log(id); 
    console.log("handle Delete"); 
    $.ajax( {
 url: "https://usman-recipes.herokuapp.com/api/recipes/"+id, method: "DELETE",
 success: function() {
     loadrecipes();
 }
    });
}

function loadrecipes() {
    $.ajax({
url: "https://usman-recipes.herokuapp.com/api/recipes", method:"GET", success:function(response) {
    console.log(response);
    var recipes= $("#recipes");
    recipes.empty();
    for (i=0; i< response.length ;i++)
    {
var rec = response[i];
recipes.append(`<div class="recipe" data-id= "${rec._id}"><h3>${rec.title}</h3><p> <button class="btn btn-danger float-right">
Delete</button> <button class="btn btn-warning">
Edit</button>${rec.body}</p></div>`)
    }
    
}
    });
}