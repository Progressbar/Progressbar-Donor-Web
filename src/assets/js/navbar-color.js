$(document).ready(function(){
  const isMobile = screen.width < 414;
  let firstPx = 612;
  let secondPx = 4040;

  if (isMobile) {
    firstPx = 560;
  }

  let isBlack = false;

  $(window).scroll(function() {
    const navbar = $('.my-navbar');
    const navbarLogoWhite = $('.my-navbar__main-logo__white');
    const navbarLogoBlack = $('.my-navbar__main-logo__black');
    const navbarButton = $('.my-navbar__action-btn');
    // const unactive = $('.my-navbar__lang-switcher__unactive');
    const active = $('.my-navbar__lang-switcher__current');
    const hr = $('.my-navbar__lang-switcher__hr');

    if ($(document).scrollTop() < firstPx) {

      if (!isBlack) {
        isBlack = !isBlack;
        navbarLogoBlack.fadeOut(200, function () {
          navbarLogoBlack.addClass('hidden')
          navbarLogoWhite.removeClass('hidden')
          navbar.css('background-color', 'white');
          active.css('color', 'black');
          hr.css('background-color', '#232323')
        }).fadeIn(200);
      }
    } else if ($(document).scrollTop() < secondPx) {

      if (isBlack) {
        isBlack = !isBlack;
        navbarLogoWhite.fadeOut(200, function () {
          navbarLogoWhite.addClass('hidden')
          navbarLogoBlack.removeClass('hidden')
          navbar.css('background-color', '#111');
          active.css('color', 'white');
          hr.css('background-color', 'white')
        }).fadeIn(200);
      }
    } else {

      if (!isBlack) {
        isBlack = !isBlack;
        navbarLogoBlack.fadeOut(200, function () {
          navbarLogoBlack.addClass('hidden')
          navbarLogoWhite.removeClass('hidden')
          navbar.css('background-color', 'white');
          active.css('color', 'black');
          hr.css('background-color', '#232323')
        }).fadeIn(200);
      }
    }
  });
});
