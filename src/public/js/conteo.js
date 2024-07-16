
var count = 3;
var countdownElement = document.getElementById("cuentaRegresivaRedireccion");

var countdownInterval = setInterval(function () {
    count--;
    countdownElement.textContent = count;

    if (count <= 1) {
        clearInterval(countdownInterval);
    }
}, 1000);