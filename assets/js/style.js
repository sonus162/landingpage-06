$(".services__body").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});

function prevSlide(class_name) {
    const name = "." + class_name;
    $(name).slick("slickPrev");
}

function nextSlide(class_name) {
    const name = "." + class_name;
    $(name).slick("slickNext");
}
