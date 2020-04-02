//US Map
var myMap = L.map("map", {
  center: [38, -97],
  zoom: 5,
});

myMap.scrollWheelZoom.disable();
//NJ Map
// var myMap = L.map("map", {
//   center: [40.15, -74.4],
//   zoom: 8
// });

//Europe Map
// var myMap = L.map("map", {
//   center: [56, 23.1],
//   zoom: 4
// });

// Asia Map
// var myMap = L.map("map", {
//   center: [19, 88],
//   zoom: 4
// });

// North-East Map
// var myMap = L.map("map", {
//   center: [43, -75],
//   zoom: 6
// });

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);


