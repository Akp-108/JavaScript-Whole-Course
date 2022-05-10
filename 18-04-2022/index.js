console.log("working")
// jquery- Its a javaScript library which provides effective methods of doing somthing in frontend and gives essential features like DOM Manipulation, AJAX interqactions etc. 
//using class name, id's, tags, and this

// $("button").click(function(){
//     // $("p").hide();
//     // $("p").toggle();
//     // $(".para").toggle();
//     $("#head").toggle();
//     // $(this).hide();//this hide the current objects and we can not get it back
// })

//AJAX -- Asynchronous JavaScript and XML file
//It allows us to make server calls and displays data without reloading the page.
// It allows us to communicate with the remote web servers in an asynchonous way with API calls, we can request data from web servers dynamucally.
//In ajax call we donot use ./# for accessing the class and ids repectively.
// We simply need to access by writing the name of the ids and class name.
$("button").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type : "GET",
        success : function(data){
            console.log(data);
            // document.getElementsByTagName("p")[0].innerText = data.title;
            // document.getElementsByTagName("p")[1].innerText = data.body;
            document.getElementById("head").innerText = data.body;
            document.getElementsByClassName("para")[0].innerText = data.body;
        }
    })
})
