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
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

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
// /Loop through the countries array
for (var i = 0; i < cities.length; i++){

// Conditionals for countries points
var color = "";
if (cities[i].totaldeaths > 150) {
  color = "yellow";
}
else if (cities[i].totaldeaths > 50) {
  color = "blue";
}
else if (cities[i].totaldeaths < 20 ){
  color = "green";
}
else {
  color = "red";
}
  // Add circles to map
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "red",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: cities[i].totaldeaths 
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].totaldeaths + "</h3>").addTo(myMap);
}

  // Adjust radius