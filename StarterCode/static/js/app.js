// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use`Object.entries` to console.log each UFO Sighting from data.js(to display all of the data in the table)

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

// to assign the on click function to the button

var buttton = d3.select("#filter-btn");
buttton.on("click", function(){
 d3.event.preventdefault;

//Create Variables for various Parameters
 var inputdate = d3.select("#datetime").property("value");
 var inputcountry = d3.select("#country").property("value");
 var inputstate = d3.select("#state").property("value");
 var inputshape = d3.select("#shape").property("value");
 var inputcity = d3.select("#city").property("value");
 var tableFilter = tableData;

 //create conditional in case we want to search on multiple criteria. 

 if (inputdate){
 tableFilter = tableFilter.filter(row=>row.datetime === inputdate);
 }

 if (inputshape){
 tableFilter = tableFilter.filter(row => row.shape === inputshape);
    }

 if (inputcountry){
 tableFilter = tableFilter.filter(row => row.country === inputcountry);
}

 if (inputstate){
 tableFilter = tableFilter.filter(row => row.state === inputstate);
 }

 if (inputcity){
 tableFilter = tableFilter.filter(row => row.city === inputcity);
    }

    buildTable(tableFilter);

});


