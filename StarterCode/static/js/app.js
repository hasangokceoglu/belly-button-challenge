// Use the D3 library to read in samples.json from the URL
function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
    let metadata=data.metadata;

    // Filter the data for the object with the desired sample number

    let idArray= metadata.filter(dataObj.id == sample);

    let result = idArray[0]

    // Use d3 to select the panel with id of '#sample-metadata'
    let PANEL = d3.select("#sample-metadata");

    // Use '.html("" to clear any existing metadata)
    PANEL.html("");

    // hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    for (key in result) {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
    };
  }

  function buildCharts(sample) {

    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json") 
      let metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      
      let idArray = metadata.filter(dataObj => dataObj.id == sample);
      let result = idArray[0];

      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.cample_values;
  }










