$(function() {

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        });

    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});
