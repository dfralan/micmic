(() => {
    'use strict'
  
    function main() {  
    // Formulario de logueo
    const loginForm = document.getElementById('loginForm')

    var opts = {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      referrer: "no-referrer"
    }

    var validationTimeout
    var entryA = "";
    var entryB = "";
    var entryC = "";
    var entryD = "";

    if (loginForm) {
      
        var formUserKind = "Particular"
        const formCity = document.getElementById('formCity')
        const formUsername = document.getElementById('formUsername')
        const formNumber = document.getElementById('formNumber')
        const particularBtn = document.getElementById("particularBtn");
        const negocioBtn = document.getElementById("negocioBtn");

        particularBtn.addEventListener("click", function() {
            formUserKind = "Particular"
            particularBtn.classList.add("selected-pill");
            negocioBtn.classList.remove("selected-pill");
            negocioBtn.classList.add("text-body-tertiary");
            particularBtn.classList.remove("text-body-tertiary");
            
            // Select the root element or the element with data-bs-theme=light
            const rootElement = document.documentElement;
            // Change the value of --bs-primary to your desired color
            rootElement.style.setProperty('--bs-primary', '#039768');

        });
        
        negocioBtn.addEventListener("click", function() {
            formUserKind = "Negocio"
            negocioBtn.classList.add("selected-pill");
            particularBtn.classList.remove("selected-pill");
            particularBtn.classList.add("text-body-tertiary");
            negocioBtn.classList.remove("text-body-tertiary");
        });

        function urlFeedbackConstructor() {
        let filledURL = "https://docs.google.com/forms/d/e/1FAIpQLSd1aDSbfLdBvnFcOT4KI9_Y8CkTslCUjgq6pticgHusik7Heg/viewform?usp=pp_url&entry.939537582=Particular&entry.1651371490=Juan&entry.209454091=Juan1&entry.1284970309=xxxxxxxxxx"
        let ss = filledURL.match("https(.*)/viewform");
        var formEntries = filledURL.match(/entry.([0-9]+)/g);
        entryA = formEntries[0];
        entryB = formEntries[1];
        entryC = formEntries[2];
        entryD = formEntries[3];
        return ss[0].replace("viewform", "formResponse?usp=pp_url");
        }

        function entryComposer(entry, content) {
            let encodedContent = encodeURIComponent(content)
            if (entry == "") { return "" }
            else return ('&' + entry + '=' + encodedContent)
        }

      function addValidationClass() {
        loginForm.classList.add('was-validated');
      }

      formCity.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      formUsername.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      formNumber.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      // JavaScript to handle form submission and display control messages
      loginForm.addEventListener('submit', function(event) {
        console.log("attempt to submit")
        var form = event.target;
        console.log(form)
        if ("a" === "b") {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          particularBtn.classList.add("text-body-tertiary");
        } else {
          clearTimeout(validationTimeout);
          form.classList.remove('was-validated');
          event.preventDefault();
          submit(formUserKind, formCity.value + " ", formUsername.value, formNumber.value);
        }
      });

      //Submit fetch
      function submit(a,b,c,d) {
        var fullFeedbackurl = urlFeedbackConstructor() +
            entryComposer(entryA, a) +
            entryComposer(entryB, b) +
            entryComposer(entryC, c) +
            entryComposer(entryD, d) +
            '&submit=Submit'

        console.log("Making Request");
            loginForm.classList.remove('was-validated');
            fetch(fullFeedbackurl, opts).then(function (response) {
                return response.text();
            })
            .then(function (text) {
              loginForm.classList.remove('was-validated');
              window.location.href = "nuevo-repartidor.html";
            })
            .catch(function (error) {
            });
      }
    }
    
    }
    window.addEventListener('DOMContentLoaded', () => {
      main()
    })
  
  })()