function scrollToDonateSection() {
    $('html, body').animate({
        scrollTop: $("#support").offset().top
    }, 1500);
}

$("#donate").click(scrollToDonateSection);
$("#donate-1").click(scrollToDonateSection);
