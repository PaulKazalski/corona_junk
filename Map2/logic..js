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
// var formatTime = d3.timeFormat("%B %d, %Y");
// formatTime("March 23, 2020");
// var date = "March 23, 2020"
var lat = [];
var lng = [];
// var data = d3.csvParse("latlng.csv")
d3.csv("latlng.csv", function(data){
  console.log(data)
  // console.log("test")
var cities = data;
// if (error) throw error;
for (var i = 0; i < cities.length; i++){
  cities[i].Lat = +cities[i].Lat;
  cities[i].Lng = +cities[i].Lng;
  cities[i].TotalDeaths = +cities[i].TotalDeaths;
  // Conditionals for cities points
  function getColor (state){
     if (state > 150) {
        color = "yellow";
      }
      else if (state > 50) {
        color = "blue";
      }
      else if (state < 20 ){
        color = "green";
      }
      else {
        color = "red";
      }
      return color};
}
 // Add circles to map
for (var i = 0; i < cities.length; i++){
    L.circleMarker([cities[i].Lat, cities[i].Lng], {
      fillOpacity: 0.75,
      color: "white",
      fillColor: getColor(cities[i].TotalDeaths),
      radius: cities[i].TotalDeaths 
    }).bindPopup("<h1>" + cities[i].USAState + "<h1> <hr> <h2> Total Cases: " + cities[i].TotalCases + "</h2> <hr> <h3> Total Deaths: " + cities[i].TotalDeaths + 
    "</h3> <hr> <h4> Date: March 23,2020" + "</h4>"  ).addTo(myMap);
  }
})