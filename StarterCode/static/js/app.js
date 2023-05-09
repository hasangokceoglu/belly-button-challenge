// Use the D3 library to read in samples.json from the URL
const samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(samples_url).then(function(data) {
    console.log(data);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

function init() {


    // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");


}