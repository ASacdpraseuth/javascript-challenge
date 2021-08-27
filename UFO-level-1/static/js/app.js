// from data.js
var tableData = data;

// YOUR CODE HERE!

// lookit the things
//console.log(tableData);

// select stuffs
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');

///////////
// TABLE //
///////////

// build a table
tableData.forEach(function(sighting) {
    // add a new table row or 'tr' for each sighting
    var row = tbody.append('tr');

    // get the data to fill the table
    Object.entries(sighting).forEach(function([key, value]) {
      //console.log(key, value);

      // fill the table
      var cell = row.append('td');
      cell.text(value);
    });
  });

////////////
// BUTTON //
////////////

// makin the button button
button.on('click', function() {

    tbody.html('');

    // select the input
    var inputElement = d3.select('#datetime');

    // select value of input
    var inputValue = inputElement.property('value');

    // send value to console
    console.log(inputValue);

    // filter data from selection
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // send filtered data to console
    console.log(filteredData);

    // build a table
    filteredData.forEach(function(filterData) {

        console.log(filterData);

        // add a new table row or 'tr' for each sighting
        var row = tbody.append("tr");

        // get the data to fill the table
        Object.entries(filterData).forEach(function([key, value]) {
            //console.log(key, value);

            // fill the table
            var cell = row.append("td");
            cell.text(value);
        });
    });
});