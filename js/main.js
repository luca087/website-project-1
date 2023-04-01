$(function(){
    fetch('../DataBaseFiles/Items.json')
        .then(function(response){
            console.log(response.json());
        })

    $("#item-submit-btn").on('click', function(){
        var name = $("#item-name-input").val();
        var content = $("#item-content-input").val();

        console.log("name: ", name, "content: ", content);
    }
)});