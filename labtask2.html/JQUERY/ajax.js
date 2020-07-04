$ (function()
{
   $ ("#load").click(function() {
    $.get("ajax.txt",function (response) {
        $("#result").empty;
        $("#result").append(response);
        //append append() method inserts the
        // specified content as the last child of each element in the jQuery collection 
    });
   });
});
