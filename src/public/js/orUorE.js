let formCity = document.getElementById("formCity")
let buttonFindCityForm = document.getElementById("buttonFindCityForm")

// JavaScript to handle form submission and display control messages
buttonFindCityForm.addEventListener('click', function (event) {
  let formCityID = (obtenerIdCiudad(obtenerContenidoParentesis(formCity.value)[1], obtenerContenidoParentesis(formCity.value)[0]) || "");
  let matchFound = false; // Variable to track if a match is found
  let deliveryResults = document.getElementById("deliveryResults")
  deliveryResults.innerHTML = ""

  for (const key in usersAR) {
    if (usersAR.hasOwnProperty(key)) {
      const obj = usersAR[key];
      if (obj.cityID === formCityID) {

        let deliveryUsername = obj.username
        let checkDeliveryState = (operatorState(obj.activeInterval))
        var deliveryState
        var deliveryStateStyle
        if (checkDeliveryState) {
          deliveryState = "Activo"
          deliveryStateStyle = " "
        } else {
          deliveryState = "Inactivo"
          deliveryStateStyle = "filter: grayscale(100%); opacity: 0.9"
        }

        deliveryResults.innerHTML += `
        <a style="transition: .3s; max-width: 600px; ${deliveryStateStyle}" class="text-decoration-none width-100 display-flex flex-col z-2 rounded-l s-gap bg-white shadow-one" href="https://micmic.shop/`+ parseInt(key)/11 +`">
        
          
            <div class='display-flex flex-row s-gap'>

            <div class=''>
              <img class="rounded-l cover avatar-xl" src="`+ obj.profileImg +`" alt="">
              <div class="rounded-l absolute to-top to-left avatar-xl display-flex full-center bg-tertiary" src="`+ obj.profileImg +`" alt=""></div>
            </div>
            

              <div class='display-flex flex-col s-gap'>
                <h5 class="m-0 p-0 text-dark">
                  `+ deliveryUsername +`
                </h5>
                <p class="m-0 fw-semibold text-primary" loom="` + deliveryState + `">
                  ` + deliveryState + `
                </p>
              </div>

            </div>
            
            
            <div class="align-items-bottom">
              
              
              <small class="bi bi-geo-alt text-dark">`+ obtenerContenidoParentesis(formCity.value)[0] + " (" + obtenerContenidoParentesis(formCity.value)[1] + ")" +`</small>
            </div>
          

        </a>
            `;
        matchFound = true; // Set the flag to true if a match is found
      }
    }
  }

  rateNow()

  if (!matchFound) {
    let imgCoverBuscarPage = document.getElementById("imgCoverBuscarPage")
  
    deliveryResults.innerHTML = `
    <div class="text-center display-flex flex-col full-center l-gap">
          <img width="220px" id="imgCoverBuscarPage" src='src/public/img/noDelivery.svg' class="cover" alt="">
          <p>No hay repartidores en tu zona.</p>
          <a class="text-decoration-none" href="register.html">¿Querés ser repartidor?</a>
    </div>
    `
    console.log("No deliverys found in that location."); // Log a message if no match is found
  }
});
