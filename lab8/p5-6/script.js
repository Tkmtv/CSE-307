$(document).ready(function () {
    let isMenuHid = true;
    //open dropdown
    $(".menu span").on("click", function () {
        if (isMenuHid) {
            $('.menu li[target="hiddable"]').fadeIn();
            isMenuHid = false;
        } else {
            $('.menu li[target="hiddable"]').fadeOut();
            isMenuHid = true;
        }
    });

    //open overlay
    $(".overLayBtn").on("click", function () {
        $(".overlayMask").fadeIn();
    });

    //close overlay
    $(".closeOverlay").on("click", function () {
        $(".overlayMask").fadeOut();
    });
});