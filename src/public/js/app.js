/*!
 * App for loom web.
 * Copyright 2022-2023 The Teller Authors
 * Licensed under the Apache License, Version 2.0
 */

(() => {
  'use strict'

  function main() {

    // Collapse navbar button animation
    const plusIcon = document.getElementById('navbar-toggler-icon');

    if (plusIcon) {
      document.getElementById('navbarNavAltMarkup').addEventListener('show.bs.collapse', function () {
        plusIcon.classList.add('rotate');
      });
      document.getElementById('navbarNavAltMarkup').addEventListener('hide.bs.collapse', function () {
        plusIcon.classList.remove('rotate');
      });
    }

    // Popover launch
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    // Tooltip launch
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    
  }
  window.addEventListener('DOMContentLoaded', () => {
    main()
  })

})()



