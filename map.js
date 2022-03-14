var map = L.map('map').setView([-34.6037389, -58.3815704], 11);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

var popup = L.popup();

let searchButton = document.getElementById('search');

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Has hecho click en la coordenada:<br> " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString()) // Sets the HTML content of the popup.
        .openOn(map);
}

function goTo(){
    let lat = parseFloat(document.getElementById('lat').value);
    let lng = parseFloat(document.getElementById('lng').value);
    if(isNaN(lat) ||isNaN(lng)){
        alert("Debe ingresar ambas coordenadas en un formato válido");
        return;
    }
    map.setView([lat,lng], 11);
    popup
    .setLatLng({lat,lng})
    .setContent("Ubicación")
    .openOn(map);
}

map.on('click', onMapClick);
searchButton.addEventListener('click', () => {goTo()});



