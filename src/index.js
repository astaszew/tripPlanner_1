const mapboxgl = require("mapbox-gl");
const buildMaker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiaWFyZXNoYXkiLCJhIjoiY2pvZzd0c3EyMGM5bTN3cXY4bDNrcGlsMCJ9.7bsxtKCbc5RhF1Hdzsf_YA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map)

console.log(buildMaker('Hotel', [-87.6354, 41.8885]))
buildMaker('Hotel', [-87.6354, 41.8885]).addTo(map)