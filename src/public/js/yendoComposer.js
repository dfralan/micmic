(function () {
    function main() {

        const storedURL = localStorage.getItem('currentUrl');
        const last13Characters = parseInt(storedURL.slice(-13))
        var userID
        
        if (storedURL.includes("partner")) {
            window.location.href = "https://micmic.shop/partner/menu.html";
            return
        }
        
        else if (!isNaN(last13Characters)) { 
            userID = (last13Characters * 11)
        } 

        // Match to see if there is an delivery with that number
        if (usersAR[userID]) {
            // Fields to fill
            let deliveryUsername = document.getElementById("deliveryUsername")
            let deliveryStateField = document.getElementById("deliveryState")
            let deliveryRatingField = document.getElementById("rat")
            let deliveryCityField = document.getElementById("deliveryCity")
            let deliveryUsernameQR = document.getElementById("deliveryUsernameQR")
            let deliveryCityQR = document.getElementById("deliveryCityQR")

            // Content to fill fields to fill
            let stateOfThisDelivery = usersAR[userID].activeInterval ? "Activo" : "Inactivo";

            // Filling fields to fill
            deliveryUsername.textContent = usersAR[userID].username
            deliveryUsernameQR.textContent = usersAR[userID].username
            deliveryStateField.setAttribute("loom", stateOfThisDelivery)
            deliveryRatingField.innerHTML = `
                <rater rating="`+ usersAR[userID].rank + `">
                    <ul class="list-inline mb-0 gap-0">
                        <li class="list-inline-item badge rounded-pill text-light bg-black"></li>
                        <li class="list-inline-item bi text-warning" style="margin: 0;"></li>
                        <li class="list-inline-item bi text-warning" style="margin: 0;"></li>
                        <li class="list-inline-item bi text-warning" style="margin: 0;"></li>
                        <li class="list-inline-item bi text-warning" style="margin: 0;"></li>
                        <li class="list-inline-item bi text-warning" style="margin: 0;"></li>
                    </ul>
                </rater>
                `
            rateNow()

            var ubicacionDelivery = getParentProvinceAndCityName(usersAR[userID].cityID);

            deliveryCityField.textContent = ubicacionDelivery.ciudad + " (" + ubicacionDelivery.provincia + ")"
            deliveryCityQR.textContent = ubicacionDelivery.ciudad + " (" + ubicacionDelivery.provincia + ")"



            // QR Gen
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: "https://micmic.shop/" + parseInt(userID) / 11,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            var switchDirec = document.getElementById('invertirDireccionesBtn');
            var pedirButton = document.getElementById('pedir');
            // Get the input values
            var direccionRetiro = document.getElementById('direccionRetiro');
            var direccionEntrega = document.getElementById('direccionEntrega');
            var indicacionesEntrega = document.getElementById('indicacionesEntrega');
            var fragil = document.getElementById('btn-check-fragil');
            var urgente = document.getElementById('btn-check-urgente');
            var frio = document.getElementById('btn-check-frio');
            var efectivo = document.getElementById('btn-check-efectivo');
            var tags = [];
            // Check the patterns for the input fields
            var direccionPattern = /^[A-Za-z0-9\s.,'¡¿ñÑáéíóúÁÉÍÓÚüÜ]+$/;



            switchDirec.addEventListener("click", function () {
                var tempValue = direccionRetiro.value;
                direccionRetiro.value = direccionEntrega.value;
                direccionEntrega.value = tempValue;
            })

            function pedir() {

                if (fragil.checked) {
                    tags.push("#Frágil");
                }
                if (urgente.checked) {
                    tags.push("#Urgente");
                }
                if (frio.checked) {
                    tags.push("#Frío");
                }
                if (efectivo.checked) {
                    tags.push("#PagoEnEfectivo");
                }
                var tagsString = tags.join(" ");

                let dr = direccionRetiro.value

                
                var mensajeRepartidor = "¡Hola " + usersAR[userID].username + "!\n\n" +
                    "Necesito realizar un envío con la siguiente ruta:\n\n" +
                    "Dirección de retiro: " + dr + "\n" +
                    "Dirección de entrega: " + direccionEntrega.value + "\n\n" +
                    "Indicaciones:\n" +
                    indicacionesEntrega.value + "\n\n" +
                    tagsString + "\n\n" +
                    "Por favor, confirma la aceptación de este pedido lo antes posible.\n\n" +
                    "¡Gracias!\n\n" +
                    "Mensaje generado desde la App Yendo.";

        
                window.open('https://wa.me/' + parseInt(userID) / 11 + '?text=' + mensajeRepartidor, "_blank")

                // Optional: Reset the form after submission
                document.getElementById('direccionRetiro').value = "";
                document.getElementById('direccionEntrega').value = "";
                document.getElementById('indicacionesEntrega').value = "";
                document.getElementById('btn-check-fragil').checked = false;
                document.getElementById('btn-check-urgente').checked = false;
                document.getElementById('btn-check-frio').checked = false;
                document.getElementById('btn-check-efectivo').checked = false;
            }

            function hanginAround() {
                if ((direccionPattern.test(direccionRetiro.value)) && (direccionPattern.test(direccionEntrega.value))) {
                    pedirButton.removeAttribute('disabled');
                    pedirButton.addEventListener("click", function () {
                        pedir()
                    })
                }
                else {
                    pedirButton.setAttribute('disabled', 'disabled');
                }
            }

            // Input on retiro
            direccionRetiro.addEventListener("input", function () {
                if (direccionPattern.test(direccionRetiro.value)) {//no valid retiro address
                    direccionRetiro.classList.add("is-valid");
                    direccionRetiro.classList.remove("is-invalid");
                    hanginAround()
                } else {
                    direccionRetiro.classList.add("is-invalid");
                    direccionRetiro.classList.remove("is-valid");
                    pedirButton.setAttribute('disabled', 'disabled');
                }
            });

            // Input on entrega
            direccionEntrega.addEventListener("input", function () {
                if (direccionPattern.test(direccionEntrega.value)) {//no valid retiro address
                    direccionEntrega.classList.add("is-valid");
                    direccionEntrega.classList.remove("is-invalid");
                    hanginAround()
                } else {
                    direccionEntrega.classList.add("is-invalid");
                    direccionEntrega.classList.remove("is-valid");
                    pedirButton.setAttribute('disabled', 'disabled');
                }
            });
        }
        else {
            window.location.href = "https://micmic.shop/no-delivery.html";
        }

    }

    // Run main when DOM is ready
    document.addEventListener("DOMContentLoaded", function () {
        main()
    });

})();
