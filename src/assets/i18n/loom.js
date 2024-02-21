import loomTranslations from '/src/assets/i18n/loomTranslations.js';
    
(function () {
    function main() {
        var countries = [
            { code2: 'af', name: 'Afrikaans', nativeLanguage: 'Afrikaans' },
            { code2: 'am', name: 'Amharic', nativeLanguage: 'አማርኛ' },
            { code2: 'ar', name: 'Arabic', nativeLanguage: 'العربية' },
            { code2: 'az', name: 'Azerbaijani', nativeLanguage: 'Azərbaycanca' },
            { code2: 'be', name: 'Belorussian', nativeLanguage: 'Беларуская' },
            { code2: 'bg', name: 'Bulgarian', nativeLanguage: 'Български' },
            { code2: 'bn', name: 'Bengali', nativeLanguage: 'বাংলা' },
            { code2: 'br', name: 'Breton', nativeLanguage: 'Brezhoneg' },
            { code2: 'bs', name: 'Bosnian', nativeLanguage: 'Bosanski' },
            { code2: 'ca', name: 'Catalan', nativeLanguage: 'Català' },
            { code2: 'cs', name: 'Czech', nativeLanguage: 'Čeština' },
            { code2: 'cy', name: 'Cymraeg', nativeLanguage: 'Cymraeg' },
            { code2: 'da', name: 'Danish', nativeLanguage: 'Dansk' },
            { code2: 'de', name: 'German', nativeLanguage: 'Deutsch' },
            { code2: 'dv', name: 'Dhivehi', nativeLanguage: 'ދިވެހި' },
            { code2: 'en', name: 'English', nativeLanguage: 'English' },
            { code2: 'es', name: 'Spanish', nativeLanguage: 'Español' },
            { code2: 'et', name: 'Estonian', nativeLanguage: 'Eesti' },
            { code2: 'eu', name: 'Basque', nativeLanguage: 'Euskara' },
            { code2: 'fa', name: 'Persian', nativeLanguage: 'فارسی' },
            { code2: 'fi', name: 'Finnish', nativeLanguage: 'Suomi' },
            { code2: 'fr', name: 'French', nativeLanguage: 'Français' },
            { code2: 'gl', name: 'Galician', nativeLanguage: 'Galego' },
            { code2: 'el', name: 'Greek', nativeLanguage: 'Ελληνικά' },
            { code2: 'ha', name: 'Hausa', nativeLanguage: 'هَوُسَ' },
            { code2: 'he', name: 'Hebrew', nativeLanguage: 'עברית' },
            { code2: 'hi', name: 'Hindi', nativeLanguage: 'हिन्दी' },
            { code2: 'hr', name: 'Croatian', nativeLanguage: 'Hrvatski' },
            { code2: 'hu', name: 'Hungarian', nativeLanguage: 'Magyar' },
            { code2: 'hy', name: 'Armenian', nativeLanguage: 'Հայերեն' },
            { code2: 'is', name: 'Icelandic', nativeLanguage: 'Íslenska' },
            { code2: 'it', name: 'Italian', nativeLanguage: 'Italiano' },
            { code2: 'id', name: 'Indonesian', nativeLanguage: 'Bahasa Indonesia' },
            { code2: 'ja', name: 'Japanese', nativeLanguage: '日本語' },
            { code2: 'ka', name: 'Georgian', nativeLanguage: 'ქართული' },
            { code2: 'kk', name: 'Kazakh', nativeLanguage: 'Қазақша' },
            { code2: 'km', name: 'Khmer', nativeLanguage: 'ភាសាខ្មែរ' },
            { code2: 'ko', name: 'Korean', nativeLanguage: '한국어' },
            { code2: 'ku', name: 'Kurdish', nativeLanguage: 'Kurdî' },
            { code2: 'ky', name: 'Kyrgyz', nativeLanguage: 'Кыргызча' },
            { code2: 'lt', name: 'Lithuanian', nativeLanguage: 'Lietuvių' },
            { code2: 'lv', name: 'Latvian', nativeLanguage: 'Latviešu' },
            { code2: 'mk', name: 'Macedonian', nativeLanguage: 'Македонски' },
            { code2: 'ml', name: 'Malayalam', nativeLanguage: 'മലയാളം' },
            { code2: 'mn', name: 'Mongolian', nativeLanguage: 'Монгол' },
            { code2: 'mr', name: 'Marathi', nativeLanguage: 'मराठी' },
            { code2: 'ms', name: 'Malay', nativeLanguage: 'Bahasa Melayu' },
            { code2: 'nb', name: 'Norwegian Bokmål', nativeLanguage: 'Norsk Bokmål' },
            { code2: 'nl', name: 'Dutch', nativeLanguage: 'Nederlands' },
            { code2: 'nn', name: 'Norwegian Nynorsk', nativeLanguage: 'Norsk Nynorsk' },
            { code2: 'no', name: 'Norwegian', nativeLanguage: 'Norsk' },
            { code2: 'pl', name: 'Polish', nativeLanguage: 'Polski' },
            { code2: 'ps', name: 'Pashto', nativeLanguage: 'پښتو' },
            { code2: 'pt', name: 'Portuguese', nativeLanguage: 'Português' },
            { code2: 'ro', name: 'Romanian', nativeLanguage: 'Română' },
            { code2: 'ru', name: 'Russian', nativeLanguage: 'Русский' },
            { code2: 'sd', name: 'Sindhi', nativeLanguage: 'سنڌي' },
            { code2: 'sk', name: 'Slovak', nativeLanguage: 'Slovenčina' },
            { code2: 'sl', name: 'Slovene', nativeLanguage: 'Slovenščina' },
            { code2: 'so', name: 'Somali', nativeLanguage: 'Soomaaliga' },
            { code2: 'sq', name: 'Albanian', nativeLanguage: 'Shqip' },
            { code2: 'sr', name: 'Serbian', nativeLanguage: 'Српски' },
            { code2: 'sv', name: 'Swedish', nativeLanguage: 'Svenska' },
            { code2: 'sw', name: 'Swahili', nativeLanguage: 'Kiswahili' },
            { code2: 'ta', name: 'Tamil', nativeLanguage: 'தமிழ்' },
            { code2: 'tg', name: 'Tajik', nativeLanguage: 'Тоҷикӣ' },
            { code2: 'th', name: 'Thai', nativeLanguage: 'ไทย' },
            { code2: 'tr', name: 'Turkish', nativeLanguage: 'Türkçe' },
            { code2: 'tt', name: 'Tatar', nativeLanguage: 'Татарча' },
            { code2: 'ug', name: 'Uyghur', nativeLanguage: 'ئۇيغۇرچە' },
            { code2: 'uk', name: 'Ukrainian', nativeLanguage: 'Українська' },
            { code2: 'ur', name: 'Urdu', nativeLanguage: 'اردو' },
            { code2: 'uz', name: 'Uzbek', nativeLanguage: 'Oʻzbekcha' },
            { code2: 'zh', name: 'Chinese', nativeLanguage: '中文' },
            { code2: 'vi', name: 'Vietnamese', nativeLanguage: 'Tiếng Việt' }
        ];
        
        // If there is no loom selector return.
        const loomTag = document.getElementsByTagName("loom")[0] || false;
        if (!loomTag) {
            console.error("No loom language selector. Add it so loom can run.")
            return;
        }

        const loomList = document.querySelectorAll("[loom-list]");
        const loomLanguages = loomTag.querySelectorAll('[loom-language]');
        var loomLeader = { number: 0, language: "" };

        // Split array to strings with index
        // Example: a = "Hello ?? Hola" byLoom(a)[0] would return Hello // byLoom(a)[1] return Hola
        function byLoom(x) {
            const a = x.split("??").map((t) => t.trim());
            return a;
        }

        // Get country and construct svg flags
        function getCountryName(code2) {
            const country = countries.find(function (c) {
                return c.code2 === code2;
            });
            if (country) {
                return {
                    name: country.name,
                    nativeLanguage: country.nativeLanguage,
                };
            } else {
                console.error("Unknow country code, check the list to find a match.")
                return {
                    name: "a",
                    nativeLanguage: "Unknow",
                };
            }
        }

        // Get and set list of supported languages
        function getLoomLanguages() {
            loomLanguages.forEach((loomLanguage) => {
                let a = loomLanguage.getAttribute("loom-language")
                let b = getCountryName(a.toLowerCase()).nativeLanguage
            });
            return Array.from(loomLanguages, (language) => language.getAttribute("loom-language"));
        }

        // Match phrase with translation
        function loomMatcher(inputString, targetLanguageCode) {
            if (typeof loomTranslations !== 'undefined') {
                if (loomTranslations.hasOwnProperty(inputString) && loomTranslations[inputString].hasOwnProperty(targetLanguageCode)) {
                    return loomTranslations[inputString][targetLanguageCode];
                } else {
                    return;
                }
            }
        }

        // Iterate over each loom calls and also loom-placeholder or loom-value and so on and do the trasnlation actions
        function goLoom(x, y) {
            console.log("Loom was awaked.")
            var loomCalls = document.querySelectorAll('[loom]');
            loomCalls.forEach(call => {
                const a = call.getAttribute("loom");

                // Workaround placeholders and similar
                let attributeNames = call.getAttributeNames();
                // It iterates in all the elements that has loom as attribute looking for attributes that start with "loom-""
                attributeNames.forEach(attributeName => {
                    let regexExtendedLoomAttribute = /^loom-/;
                    let regexExtendedLoomBeAttribute = /^loom-(.*)/;
                    let match = attributeName.match(regexExtendedLoomBeAttribute);
                    // If it get some, extract the intended attribute to set it
                    if (regexExtendedLoomAttribute.test(attributeName)) {
                        let extendedLoomContent = call.getAttribute(attributeName)
                        var fullLoom = byLoom(extendedLoomContent) || false;
                        let ni = loomMatcher(fullLoom, loomLeader.language)
                        // Checking first if the call has a direct match translation.
                        if (ni) {
                            call.setAttribute(match[1], ni);
                            return
                        }
                        // Look for classic translation divided by " ?? "
                        if (fullLoom.hasOwnProperty(loomLeader.number)) {
                            call.setAttribute(match[1], fullLoom[loomLeader.number]);
                        } else {
                        call.setAttribute(match[1], fullLoom[0]);
                        }
                    }
                });

                // Before 
                function putContent(a, b) {
                    if (a.hasAttribute('fill-as-inner'))  {
                        a.innerHTML = b
                    } else {
                        a.textContent = b;
                    }
                }

                // Then checking if the only loom attribute call has a direct match translation.
                const x = loomMatcher(a, loomLeader.language)
                if (x) {
                    putContent(call, x)
                    return
                }
                
                // Look for classic translation divided by " ?? "
                const fullLoom = byLoom(a) || false;
                if (fullLoom.hasOwnProperty(loomLeader.number)) {
                    putContent(call, fullLoom[loomLeader.number])
                } else {
                    putContent(call, fullLoom[0])
                }

            });

            
        }

        // Detect browser language and see if there is a match on loom Languages
        detectUserLang()
        function detectUserLang() {
            const browserLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;
            const loomLanguages = getLoomLanguages()
            loomLeader = { number: 0, language: loomLanguages[0] };
            const userLSLang = localStorage.getItem("userLoomLang")

            if (userLSLang) {
                loomLanguages.forEach(function (loom, i) {
                    if (userLSLang.toLowerCase() == loom) {
                        loomLeader = { number: i, language: loom }
                        selectLoomOption(loom);
                        goLoom()
                        return
                    }
                });
                goLoom()
            } else {
                if (browserLang) {// if detecta idioma en navegador
                    const b = browserLang.substring(0, 2);
                    loomLanguages.forEach(function (loom, i) {
                        if (b.toLowerCase() == loom) {
                            loomLeader = { number: i, language: loom }
                            selectLoomOption(loom);
                            goLoom()
                            return
                        }
                    });
                    goLoom()
                }
            }
            return
        }

        

        function selectLoomOption(language) {
            // Obtener todos los elementos select con el atributo loom-list
            const selectElements = document.querySelectorAll('select[loom-list]');
        
            // Iterar sobre cada elemento select
            selectElements.forEach((selectElement) => {
                // Iterar sobre las opciones dentro de cada select
                for (let i = 0; i < selectElement.options.length; i++) {
                    // Verificar si la opción tiene el atributo loom-language con el valor deseado
                    if (selectElement.options[i].getAttribute('loom-language') === language) {
                        // Seleccionar la opción
                        selectElement.options[i].selected = true;
                        break; // Salir del bucle una vez que se ha encontrado la opción
                    }
                }
            });
        }
        
        


        loomList.forEach(selectElement => {
            selectElement.addEventListener('change', function () {
                const selectedOption = this.options[this.selectedIndex];
                const selectedLanguage = selectedOption.getAttribute('loom-language');
                const selectedIndex = this.selectedIndex;
                loomLeader = { number: selectedIndex, language: selectedLanguage };
                console.log("The loom leader has changed to: " + loomLeader.language)
                localStorage.setItem("userLoomLang", loomLeader.language);
                selectLoomOption(loomLeader.language)
                goLoom();
            });
        });

        // Function to check if an attribute loom is added to a targeted element
        function attentiveLoom(a) {
            function checkAttribute(mutationsList) {
                console.log("Loom is attentive.")
                for (let mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'loom') {
                        console.log('The "loom" attribute was added to a targeted element.');
                        // Perform actions you need when the attribute is added
                        goLoom()
                    }
                }
            }
            // Create a new loom observer
            const attentiveLoomObserver = new MutationObserver(checkAttribute);
            // Start observing the targeted element for attribute changes
            attentiveLoomObserver.observe(a, { attributes: true });
        }

        // Observe document mutations, and if the some added node has "loom" attribute, we make an attentive observation of the element
        const elementCreationObserver = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach(mutation => {
                mutation.addedNodes.forEach(addedNode => {
                    attentiveLoom(addedNode)
                    if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.hasAttribute('loom')) {
                        // Handle newly created elements with the attribute loom here
                        console.log('New element with attribute "loom" created.');
                        attentiveLoom(addedNode)
                        goLoom()
                    }
                });
            });
        });
        elementCreationObserver.observe(document, { childList: true, subtree: true });

        // Observe mutations on elements that has "loom" as attribute
        const observer = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'loom') {
                    // Handle attribute changes here
                    console.log('Some "loom" attribute has changed.');
                    goLoom()
                }
            });
        });

        // Collecting all looms for translating
        getLooms()
        function getLooms() {
            console.log("Collecting looms for translating.")
            var targetElements = document.querySelectorAll('[loom]');
            targetElements.forEach(element => {
                observer.observe(element, { attributes: true });
            });
        }
        
    }
    
    main()

})();

