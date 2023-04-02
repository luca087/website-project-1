
import { createClient } from '../node_modules/@supabase/supabase-js/dist/module/index.js';
const supabaseUrl = 'https://xvohwimfsjsqkzwmfxse.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

var tableData = [];

$(async function(){
    await GetAndSetTable();    
    
    $("#item-submit-btn").on('click',  function(){
        var name = $("#item-name-input").val();
        var content = $("#item-content-input").val();
        var form = new FormData($("#item-form"));

        console.log("name: ", name, "content: ", content);
        console.log(form);
    }
)});
function GetAndSetTableOld(){
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

async function GetAndSetTable(){
  
let { data: Items, error } = await supabase
.from('Items')
.select('*');

console.log(data);
}