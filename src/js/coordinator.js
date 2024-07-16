function getLocation() {
    // Check if the browser supports Geolocation
    if (navigator.geolocation) {
      // Request permission to access the user's location
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  // Success callback function
  function successFunction(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    // Display the coordinates in the "coordinates" paragraph
    document.getElementById("coordinates").innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }
  
  // Error callback function
  function errorFunction() {
    console.log("Unable to retrieve your location.");
  }
  