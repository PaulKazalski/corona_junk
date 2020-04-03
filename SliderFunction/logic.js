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

var Circle1 = L.circleMarker([42, -100], {color: "blue", radius: 20});
var Circle2 = L.circleMarker([42, -100], {color: "blue", radius: 40});
var Circle3 = L.circleMarker([42, -100], {color: "blue", radius: 60});
var Circle4 = L.circleMarker([42, -100], {color: "blue", radius: 80});
var Circle5 = L.circleMarker([42, -100], {color: "orange", radius: 100});
var Circle6 = L.circleMarker([42, -100], {color: "orange", radius: 120});
var Circle7 = L.circleMarker([42, -100], {color: "orange", radius: 140});


Circle1.addTo(myMap);

producer = function( {label, value, map, exclamation} ) {

  // Removal loop
  if (Circle1) {myMap.removeLayer(Circle1)};
  if (Circle2) {myMap.removeLayer(Circle2)};
  if (Circle3) {myMap.removeLayer(Circle3)};
  if (Circle4) {myMap.removeLayer(Circle4)};
  if (Circle5) {myMap.removeLayer(Circle5)};
  if (Circle6) {myMap.removeLayer(Circle6)};
  if (Circle7) {myMap.removeLayer(Circle7)};

  //Addition loop
  if (value == 1) {Circle1.addTo(myMap)};
  if (value == 2) {Circle2.addTo(myMap)};
  if (value == 3) {Circle3.addTo(myMap)};
  if (value == 4) {Circle4.addTo(myMap)};
  if (value == 5) {Circle5.addTo(myMap)};
  if (value == 6) {Circle6.addTo(myMap)};
  if (value == 7) {Circle7.addTo(myMap)};

};

L.control.timelineSlider({
  timelineItems: ["March 23", "March 24", "March 25", "March 26", "March 27", "March 28", "March 29"], 
  changeMap: producer,
  extraChangeMapParams: {exclamation: "Hello World!"} })
.addTo(myMap);  

