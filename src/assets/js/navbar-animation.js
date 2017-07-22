$( window ).scroll(function() {
  if (screen.width > 414) {
  if ($(document).scrollTop() > 50) {
    $('.my-navbar').css( 'height', '75px' );
    $('.my-navbar__main-logo').css( 'width', '200px' );
  } else {
    $('.my-navbar').css( 'height', '95px' );
    $('.my-navbar__main-logo').css( 'width', '250px' );
  }
}
});
