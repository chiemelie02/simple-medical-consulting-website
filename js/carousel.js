var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {0:{items:1}, 768:{items:2}, 1024:{items:4}}
});
