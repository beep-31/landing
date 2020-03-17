$(function(){
    //scroll variables
    let nav = $("#nav");
    let navButton = $("#navButton");

    // fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll();

    $(window).on("scroll resize", function(){
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introHeight);
        
    });
    
    function checkScroll(scrollPos, introHeight){
        if(scrollPos > introHeight-50){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    // smooth scroll
    $("[data-scroll]").on('click', function(event){
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        console.log(elementOffset);
        nav.removeClass('show');
        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 700);
    });

    //nav button

    navButton.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    //reviews slider
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
    
});