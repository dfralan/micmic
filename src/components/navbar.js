var navbarview = `
<!-- Navbar -->
<div class="z-i sticky to-top to-left land spaced display-flex flex-row to-center">
    <div class="display-flex flex-row full-center s-gap">
        <img width="70px" height="70px" src="https://micmic.shop/src/public/img/logo-yendo-delivery.svg" alt="">
    </div>

    <div class="display-flex full-center rounded-s s-gap">
        <a style="background-color: #0D7A5F;" href="https://micmic.shop/partner" class="no-wrap display-flex full-center font-500 decoration-none padded-wide fill-white color-white rounded-s border-solid xs-gap">
            Ser partner
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>
        </a>
        <div onclick="toggleBurguer()" class="display-flex full-center xs-padded bg-white rounded-s cursor-pointer fill-black shadow-one">
            <svg id="burguerIcon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
            <svg class="display-none" id="closeIcon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>
        </div>
    </div>

</div>
`

function toggleBurguer(){
    const burguerMenu = document.getElementById('burguerMenu');
    const burguerIcon = document.getElementById('burguerIcon');
    const closeIcon = document.getElementById('closeIcon');
      if (burguerMenu.classList.contains("display-none")){
        burguerMenu.classList.remove("display-none");
        closeIcon.classList.remove("display-none");
        burguerIcon.classList.add("display-none");
      } else {
        burguerMenu.classList.add("display-none");
        burguerIcon.classList.remove("display-none");
        closeIcon.classList.add("display-none");
      }
  }