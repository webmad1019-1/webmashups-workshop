let london = { lat: 51.5285582, lng: -0.2416808 };
let theMap;
let markers = [];

function startMap() {
  theMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: london
  });

  addMarkerWhereYouHaveClicked(theMap);
}

function addMarkerWhereYouHaveClicked(theMap) {
  axios
    .get(
      "https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478&date=2017-01"
    )
    .then(x => {
      x.data.forEach(y => {
        var infowindow = new google.maps.InfoWindow({
          content: `<h1>${y.location_type}</h1>`
        });

        let marker = new google.maps.Marker({
          position: {
            lat: +y.location.latitude,
            lng: +y.location.longitude
          },
          map: theMap,
          draggable: true,
          title: "Marker where you have clicked"
        });

        marker.addListener("click", function() {
          infowindow.open(theMap, marker);
        });
      });
    });
}

startMap();
