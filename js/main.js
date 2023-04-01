$(function(){
    fetch("https://luca087.github.io/website-project-1/DataBaseFiles/Items.json")
        .then(function(response){
            console.log(response.json());
            console.log(response.arrayBuffer());
        })

    $("#item-submit-btn").on('click', function(){
        var name = $("#item-name-input").val();
        var content = $("#item-content-input").val();

        console.log("name: ", name, "content: ", content);
    }
)});
function GetItems(){
    var xhr = new XMLHttpRequest();

// open a connection
xhr.open("GET", "https://luca087.github.io/website-project-1/DataBaseFiles/Items.json", true);

// send the request
xhr.send();

// handle the response
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
}
}