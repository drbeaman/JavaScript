// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append the table rows, data and values into the table body for each record
function showTable() {
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        })
    })
};

// Create filter functiont that only renders table data for date submitted in input field
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Print the date in the console log to verify date
    console.log(inputValue);
    
    // Run the same append function above but only for filtered data
    function updateTable(filteredData) {
        // First clear any prior search data from the table
        tbody.html('');
        filteredData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
                });
            });
    }

    // Print the data in the console log to verify function is running
    console.log(filteredData);
    
    // Run the filtered date append data function
    updateTable(filteredData);
});

// Run the Append table function when web page first loads
showTable();