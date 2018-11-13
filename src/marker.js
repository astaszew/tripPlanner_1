const mapboxgl = require('mapbox-gl');

const iconURLS = {
    Activity: 'http://i.imgur.com/WbMOfMl.png',
    Hotel: 'http://i.imgur.com/D9574Cu.png',
    Restaurant: 'http://i.imgur.com/cqR6pUI.png'
}


const buildMarker = function (type, coords) {
    let newMarker = document.createElement('div')
    newMarker.style.width = '32px'
    newMarker.style.height = '39px'
    newMarker.style.backgroundImage = `url(${iconURLS[type]})`

    return new mapboxgl.Marker(newMarker).setLngLat(coords)
}


module.exports = buildMarker