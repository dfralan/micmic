(function () {

  
	const elementToHide = document.getElementById('confirmationLocationMap');
	const confirmAddressButton = document.getElementById('confirmAddressButton');
	const userLocalization = document.getElementById('userLocalization')

	
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			console.log("La geolocalización no es soportada por este navegador.");
			elementToHide.style.display = 'none';
		}
	}


	function FormulaCalculateDistance(lat, long, lat2, long2) {
		const earthRadiusKm = 6371; // Radio de la Tierra en kilómetros
	
		const toRadians = (degree) => {
		return degree * (Math.PI / 180);
		};
	
		const dLat = toRadians(lat2 - lat);
		const dLon = toRadians(long2 - long);
	
		const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRadians(lat)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	
		const distance = earthRadiusKm * c;
		return distance;
	}
	//const distanceKm = FormulaCalculateDistance(lat, long, lat2, long2);
	//console.log(`La distancia entre los puntos es de aproximadamente ${distanceKm.toFixed(2)} kilómetros.`);


	function showPosition(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		// Guardar las coordenadas en el Local Storage
		localStorage.setItem('latitude', latitude);
		localStorage.setItem('longitude', longitude);

		console.log(`Latitud: ${latitude}\nLongitud: ${longitude}`);
		

		// Llamar a la función para obtener el nombre de la calle
		getAddressFromCoordinates(latitude, longitude);
		drawOnMap(latitude, longitude);
		elementToHide.style.opacity = '1';

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

		// Add event listener to the "Hide Element" button
		confirmAddressButton.addEventListener('click', function() {
		// Hide the element by changing its style's display property to 'none'
		elementToHide.style.display = 'none';
		});
	}

	function showError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
			console.log("El usuario denegó el permiso para la geolocalización.");
			break;
			case error.POSITION_UNAVAILABLE:
			console.log("La información de ubicación no está disponible.");
			break;
			case error.TIMEOUT:
			console.log("Se ha excedido el tiempo de espera para obtener la ubicación.");
			break;
			case error.UNKNOWN_ERROR:
			console.log("Se ha producido un error desconocido al obtener la ubicación.");
			break;
		}
		elementToHide.style.display = 'none';
  }

  function getAddressFromCoordinates(latitude, longitude) {

    const locationOfResults = document.getElementById("locationOfResults");
    const userStreetInput = document.getElementById("userStreetInput");
    const userStreetNumberInput = document.getElementById("userStreetNumberInput");

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
        const city = data.address.city;
        const cityDistrict = data.address.city_district;
        const cityState = data.address.state;
        const streetName = data.address.road;
        const HouseNumber = data.address.house_number;

        userLocalization.innerHTML = `
        <small class="bi bi-geo-alt-fill text-primary"></small>
        <small class="ps-1" id="locationResult">Global</small>`

        let resultElement = document.getElementById("locationResult");
        resultElement.textContent = `${city} (${cityState})`;
        locationOfResults.textContent = `${city} - ${cityDistrict}`;
        userStreetInput.value = streetName
        userStreetNumberInput.value = HouseNumber
        console.log(data)
        })
        .catch(error => {
        console.error('Error al obtener la dirección:', error);
        elementToHide.style.display = 'none';
        });
  }

  function drawOnMap(lat, long){

    // Initialize the map
    const map = L.map('map').setView([lat, long], 13);

    // Create a tile layer and add it to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  var customIcon = L.divIcon({
      className: 'custom-icon',
      html: `<svg class="pepe" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mi ubicación" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse class="pepeShadow" cx="22.5799" cy="43.4207" rx="7.10526" ry="1.57895" fill="black"/>
      <mask id="path-2-inside-1_1415_6786" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5789 39.4737C24.5526 39.4737 39.1579 30 39.1579 16.5789C39.1579 7.42265 31.7352 0 22.5789 0C13.4226 0 6 7.42265 6 16.5789C6 30 20.6053 39.4737 22.5789 39.4737ZM22.5785 22.1055C26.0666 22.1055 28.8943 19.2778 28.8943 15.7897C28.8943 12.3016 26.0666 9.47388 22.5785 9.47388C19.0904 9.47388 16.2627 12.3016 16.2627 15.7897C16.2627 19.2778 19.0904 22.1055 22.5785 22.1055Z"/>
      </mask>
      <path class="pepeson" fill-rule="evenodd" clip-rule="evenodd" d="M22.5789 39.4737C24.5526 39.4737 39.1579 30 39.1579 16.5789C39.1579 7.42265 31.7352 0 22.5789 0C13.4226 0 6 7.42265 6 16.5789C6 30 20.6053 39.4737 22.5789 39.4737ZM22.5785 22.1055C26.0666 22.1055 28.8943 19.2778 28.8943 15.7897C28.8943 12.3016 26.0666 9.47388 22.5785 9.47388C19.0904 9.47388 16.2627 12.3016 16.2627 15.7897C16.2627 19.2778 19.0904 22.1055 22.5785 22.1055Z" fill="#2670F4"/>
      <path class="pepeson"  d="M38.1579 16.5789C38.1579 22.9229 34.6991 28.41 30.8884 32.3654C28.992 34.3339 27.0373 35.8917 25.4474 36.9517C24.6516 37.4822 23.9592 37.8799 23.4217 38.1406C23.1522 38.2713 22.9345 38.3612 22.7707 38.4165C22.5871 38.4784 22.5378 38.4737 22.5789 38.4737V40.4737C22.8668 40.4737 23.1629 40.3949 23.41 40.3115C23.6771 40.2215 23.9755 40.0948 24.2943 39.9402C24.9332 39.6304 25.7057 39.1831 26.5568 38.6158C28.2604 37.48 30.3271 35.8306 32.3287 33.753C36.3141 29.6163 40.1579 23.6561 40.1579 16.5789H38.1579ZM22.5789 1C31.183 1 38.1579 7.97493 38.1579 16.5789H40.1579C40.1579 6.87036 32.2875 -1 22.5789 -1V1ZM7 16.5789C7 7.97493 13.9749 1 22.5789 1V-1C12.8704 -1 5 6.87036 5 16.5789H7ZM22.5789 38.4737C22.6201 38.4737 22.5708 38.4784 22.3872 38.4165C22.2234 38.3612 22.0057 38.2713 21.7362 38.1406C21.1987 37.8799 20.5063 37.4822 19.7105 36.9517C18.1206 35.8917 16.1659 34.3339 14.2695 32.3654C10.4588 28.41 7 22.9229 7 16.5789H5C5 23.6561 8.84381 29.6163 12.8292 33.753C14.8308 35.8306 16.8975 37.48 18.6011 38.6158C19.4522 39.1831 20.2247 39.6304 20.8636 39.9402C21.1824 40.0948 21.4808 40.2215 21.7478 40.3115C21.995 40.3949 22.2911 40.4737 22.5789 40.4737V38.4737ZM27.8943 15.7897C27.8943 18.7255 25.5143 21.1055 22.5785 21.1055V23.1055C26.6189 23.1055 29.8943 19.8301 29.8943 15.7897H27.8943ZM22.5785 10.4739C25.5143 10.4739 27.8943 12.8538 27.8943 15.7897H29.8943C29.8943 11.7493 26.6189 8.47388 22.5785 8.47388V10.4739ZM17.2627 15.7897C17.2627 12.8538 19.6427 10.4739 22.5785 10.4739V8.47388C18.5381 8.47388 15.2627 11.7493 15.2627 15.7897H17.2627ZM22.5785 21.1055C19.6427 21.1055 17.2627 18.7255 17.2627 15.7897H15.2627C15.2627 19.8301 18.5381 23.1055 22.5785 23.1055V21.1055Z" fill="rgba(0,0,0,0.2)" mask="url(#path-2-inside-1_1415_6786)"/>
      </svg>
      `, // Usa el icono de Bootstrap
      iconSize: [45, 45],
      iconAnchor: [22.5, 0]
    });

  // Array of marker coordinates [latitude, longitude, popupText]
  const markers = [
    [lat, long, 'Marker 1'],
    // Add more markers as needed
  ];

  // Loop through the array and add markers to the map
  markers.forEach(marker => {
      const markerObj = L.marker([lat, long], { icon: customIcon }).addTo(map);
      markerObj;
    });

  }



// Run main when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    getLocation()
});

})();

function createMap() {

    // Puntos de inicio y destino
    var startPoint = [-32.8913055, -60.6985319]; // Nueva York, EE. UU. (Latitud, Longitud)
    var endPoint = [-32.9013055, -60.6985319]; // Los Ángeles, EE. UU. (Latitud, Longitud)

    // Crear el mapa en el contenedor 'map'
    var map = L.map('map2').setView([40.7128, -74.0060], 5);

    if (!map) {return;}

    // Cargar el mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Agregar marcadores para los puntos de inicio y destino
    var startMarker = L.marker(startPoint).addTo(map);
    var endMarker = L.marker(endPoint).addTo(map);

    // Create the routing control and add it to the map
    L.Routing.control({
      waypoints: [
        L.latLng(startPoint[0], startPoint[1]),
        L.latLng(endPoint[0], endPoint[1]),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    // Agregar una ventana emergente a los marcadores con información sobre los puntos
    startMarker.bindPopup('Punto de inicio: Nueva York, EE. UU.').openPopup();
    endMarker.bindPopup('Punto de destino: Los Ángeles, EE. UU.').openPopup();
}
