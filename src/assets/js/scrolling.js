function scrollToDonateSection() {
    $('html, body').animate({
        scrollTop: $("#support").offset().top
    }, 1000, 'swing');
}

$("#donate").click(scrollToDonateSection);
$("#donate-1").click(scrollToDonateSection);
