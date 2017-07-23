'use strict'
function scrollToDonateSection() {
    $('html, body').animate({
        scrollTop: $("#support").offset().top
    }, 1000, 'swing');
}

const toScroll = [$("#donate"), $("#donate-1"), $(".main-pic").find(":hidden")]
// the last select is because jquery does not select hidden slovak language element

toScroll.forEach( e => {
  e.click(scrollToDonateSection);
})
