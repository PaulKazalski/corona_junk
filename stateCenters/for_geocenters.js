//Creates US Map
var myMap = L.map("map", {
  center: [38, -97],
  zoom: 5
});

//
// These three columns should be .csv data.
// The rest of the program should work.
//

var csv_col1 = ["CA", "NY"]
var csv_col2 = [37.25, 43.3];
var csv_col3 = [-119.5, -74.2];

var statename = [];
var statelong = [];
var statelat  = [];

for (i = 0; i < csv_col1.length; i++) {
    statename.push(csv_col1[i])
    statelong.push(csv_col2[i])
    statelat.push(csv_col3[i])
};
console.log(statelat);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

for (i = 0; i < csv_col1.length; i++)
L.marker([statelong[i], statelat[i]]).addTo(myMap)
.bindPopup(`State name: ${statename[i]}`);
