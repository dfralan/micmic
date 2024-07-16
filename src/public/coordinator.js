function coordinator() {
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const formattedCoordinates = `${latitude.toFixed(7)},${longitude.toFixed(7)}`;
        document.getElementById("coordinates").innerHTML = `Coordinates: ${formattedCoordinates}`;
      }
}