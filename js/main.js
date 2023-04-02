var tableData = [];

$( function(){
    GetAndSetTable();    
    
     PostFormFetch(3,"aaa","bbbbbbbb");

    $("#item-submit-btn").on('click',  function(){
        var name = $("#item-name-input").val();
        var content = $("#item-content-input").val();
        var form = new FormData($("#item-form"));

        console.log("name: ", name, "content: ", content);
        console.log(form);
         PostFormFetch(3,"aaa","bbbbbbbb");
        Post(2, name, content);
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
function GetAndSetTable(){
  fetch("https://luca087.github.io/website-project-1/DataBaseFiles/Items.json")
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        tableData = data;
      }).then(function(){

      if(tableData.length > 0) {
        var tableHtml = '';

        tableData.forEach(element => {
          tableHtml += `<tr>
          <td>${element.ID}</td>
          <td>${element.Name}</td>
          <td>${element.Content}</td>
          </tr>`;
        });
        console.log(tableHtml);
        $("#item-table-body").append(tableHtml);
      }
    });
}
function Post(id, name, content){
  tableData.push({
    ID:id,
    Name:name,
    Content:content});
  $.post("../DataBaseFiles/Items.json", tableData)
  .done(function( data ) {
    window.alert( "Data Loaded: " + data );
  });
};
 function PostFormFetch(id,name,content){
  let response =  fetch('https://luca087.github.io/website-project-1/DataBaseFiles/Items.json', {
    method: 'POST',
    body: {ID:2,
    Name: "name 2",
  Content: "testing"}
  });

  let result =  response.json();

  alert(result.message);
}