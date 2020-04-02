// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38, -97],
  zoom: 5
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
// var marker = L.marker([45.52, -122.67], {
//   draggable: false,
//   title: "Covid-19"
// }).addTo(myMap);

// // Binding a pop-up to our marker
// marker.bindPopup("Deaths: ");
// var data = [];
// d3.csv("US_03-23.csv", function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   console.log(data)})
// Each city object contains the city's name, location and population
// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population / 40;
}
var cities = [
  {
    name: "New York",
    location: [40.663468,-73.938697],
    totalcases: 20875,
    totaldeaths: 157,
    date: 032020
  },
  {
    name: "New Jersey",
    location: [40.72422,-74.172574],
    totalcases: 2844,
    totaldeaths: 27
  },
  {
    name: "Washington",
    location: [47.619349,-122.351471],
    totalcases: 2221,
    totaldeaths: 110
  },
  {
    name: "California",
    location: [34.019394,-118.410825],
    totalcases: 2133,
    totaldeaths: 40
  },
  {
    name: "Michigan",
    location: [42.383037,-83.102237],
    totalcases: 1328,
    totaldeaths: 15
  }
];
 // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  // data.features.forEach(feature =>  {
  //   var state = feature.state[1]
  //   var deaths = feature.TotalDeaths[4]
    // Loop through the cities array and create one marker for each city object
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      L.marker(city.location)
        .bindPopup("<h1>" + city.name + "<h1> <hr> <h2> Total Cases: " + city.totalcases + "</h2> <hr> <h3> Total Deaths: " + city.totaldeaths + 
        "</h3> <hr> <h4> Date: " + city.date + "</h4>"  )
        .addTo(myMap);
    }
    
