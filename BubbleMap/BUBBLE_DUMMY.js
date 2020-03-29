

// Use D3 to grab the json file 
d3.csv(".Dummy_data.csv").then((data) => {
  console.log(data);
  // This the data for the bubble chart
  var trace2 = {
    mode: 'markers',
    //******************************************************* */
    // COVIDGILANTES!!!! Change x and y to match the dummy_data
    //******************************************************* */
    x: bubble_ids,
    y: bubble_data,
    //******************************************************* */
    // COVIDGILANTES!!!! Change x and y to match the dummy_data
    //******************************************************* */

    marker: {
      size: bubble_root,
      color: "aquamarine",
      opacity: 0.5
    }
  };
  
  var data2 = [trace2];

      // Develop the layout for the bubble chart

  var layout2 = {
    title: `Subject ${text1}'s Navel Bacteria Profile, Bubble Form`
  };
  
  // Plot the Bubble chart iff the the user's text matches an ID
  // (See line 116)
  
  Plotly.newPlot("bubble-plot", data2, layout2);
  
});
    


