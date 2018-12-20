// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

function showTable() {
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        })
    })
};

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
  console.log(inputValue);
  
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
    });

    console.log(filteredData);
  
});

// var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

// console.log(filteredData);
// // // Append data into table
// filteredData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });

showTable();