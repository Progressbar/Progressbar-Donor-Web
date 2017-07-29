$(document).ready(function(){
  let isBlack = false;

  $(window).scroll(function() {
    const navbar = $('.my-navbar');
    const navbarLogo = $('.my-navbar__main-logo');
    const navbarButton = $('.my-navbar__action-btn');
    const unactive = $('.my-navbar__lang-switcher__unactive');
    const active = $('.my-navbar__lang-switcher__current');
    const hr = $('.my-navbar__lang-switcher__hr');
    let firstPx = 612;

    if (screen.width < 414) {
      firstPx = 560;
    }
    if ($(document).scrollTop() > firstPx) {
      if (isBlack) {
        isBlack = !isBlack;
        navbarLogo.fadeOut(200, function () {
          navbarLogo.attr('src', './src/assets/img/logo-progressbar-black.png')
          navbar.css('background-color', '#111');
          active.css('color', 'white');
          // unactive.css('color', '#8e8e8e');
          hr.css('background-color', 'white')
        }).fadeIn(200);
      }
    } else {
      if (!isBlack) {
        isBlack = !isBlack;

        navbarLogo.fadeOut(200, function () {
          navbarLogo.attr('src', './src/assets/img/logo-progressbar.png')
          navbar.css('background-color', 'white');
          active.css('color', 'black');
          // unactive.css('color', '#565656');
          hr.css('background-color', '#232323')
        }).fadeIn(200);
      }
    }
  });
});
