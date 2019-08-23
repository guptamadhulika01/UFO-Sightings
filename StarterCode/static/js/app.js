// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// / Step 1: Use`Object.entries` to console.log each UFO Sighting from data.js
function buildTable(ufoData){
tbody.html("")
ufoData.forEach((ufoReports) => {
    var row = tbody.append("tr");
    Object.entries(ufoReports).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

}

buildTable(tableData);

var buttton = d3.select("#filter-btn");
buttton.on("click", function(){
 d3.event.preventdefault;
 var inputdate = d3.select("#datetime").property("value");
 var inputCountry = d3.select("#Country").property("value");
 var tableFilter = tableData

 if (inputdate){
 tableFilter = tableFilter.filter(row=>row.datetime === inputdate);
 }

if (inputCountry){
    tableFilter = tableFilter.filter(row => row.country === inputCountry);
}
 buildTable(tableFilter);

})


//"Country"