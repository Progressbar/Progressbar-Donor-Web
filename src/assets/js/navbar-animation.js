function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  nav = document.getElementById('my-navbar');

  if (distanceY > shrinkOn) {
    nav.classList.add("smaller");
  } else {
    hnav.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

//ak sme prescrollovali nejakú vzdialenost (shrinkOn) tak nam to zmensi navbar
//len v css vymeni classy ktoré som nevedel dopisat aké tam chcete vsetko
// tak ale aspon dufam ze logika pomôze
