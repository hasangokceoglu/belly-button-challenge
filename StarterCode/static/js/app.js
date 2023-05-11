const sample_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function bar_chart(value) {
  d3.json(sample_url).then(function(data) {
      let results = data.samples.filter(x => x.id == value);
  
      let trace_bar = [{
          x: results[0].sample_values.slice(0, 10).reverse(),
          y: results[0].otu_ids.slice(0, 10).map(z => "OTU " + z.toString()).reverse(),
          type: "bar",
          orientation: "h",
          text: results[0].otu_labels.slice(0, 10).reverse(),
      }];
  
      
      Plotly.newPlot("bar", trace_bar);
  }
)};

// Create a bubble chart that displays each sample    
function bubble_chart(value) {
    d3.json(sample_url).then(function(data) {
        let results = data.samples.filter(x => x.id == value);
    let trace_bubble = [{
        x: results[0].otu_ids,
        y: results[0].sample_values,
        mode: "markers",
        text: results[0].otu_labels,
        marker:{
            color: results[0].otu_ids,
            size: results[0].sample_values,
            colorscale: 'Earth',
        },
    },];
    
    let layout = {
        xaxis: {title: "OTU ID"}
    };


    Plotly.newPlot("bubble", trace_bubble, layout);
    }
)};



//Display the sample metadata, i.e., an individual's demographic information.
function demographic(values) {
    d3.json(sample_url).then(function(data) {
        let metadata = data.metadata;

        // Filter data
        let result = metadata.filter(x => x.id == values)[0];
        let demographicInfo = d3.select('#sample-metadata');

        // Clear existing data in demographicInfo
        demographicInfo.html('');

        // Add key and value pair to the demographicInfo panel
        Object.entries(result).forEach(([key, value]) => {
            demographicInfo.append('h6').text(`${key}: ${value}`);
        });
    });
}
//change charts function
function optionChanged(value) {

    bar_chart(value);
    bubble_chart(value);
    demographic(value);
  
}
//initialize charts
function Init() {

    // dropdown
    let selector = d3.select('#selDataset');

    d3.json(sample_url).then(data => {
        let sampleNames = data.names;

        // add values to drop down
        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append('option').text(sampleId);
        };

        //first value to charts
        let initialId = 940;

        // Draw the charts
        bar_chart(initialId);
        demographic(initialId);
        bubble_chart(initialId);
        
        

    });
}
//initialize function
Init();







