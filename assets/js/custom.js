
$(document).ready(function(){






// scroll nav bar and fixes nav bar

$('.navbar-toggler,.overlay') .on('click' , function(){
    $('.mobile-menu , .overlay ') .toggleClass('open')
  });

    $(window).scroll(function(){

      if($(window).scrollTop() > 60){
        $('.my-nav').addClass('nav-scroll');
      }else{
        $('.my-nav').removeClass('nav-scroll');
      }
    })

  // client carousal
  $('.testimonial-box').owlCarousel({

    loop: true,
    margin: 20,
    slideSpeed: 5000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    responsive: {
        0: {
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }

    });
    $('.test-nav .left-arr').click(function () {
    var owl = $('.testimonial-box');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel');
});
$('.test-nav .right-arr').click(function () {
    var owl = $('.testimonial-box');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel', [300]);
});

// Cube Portfolio Initializing
$('#js-grid-mosaic').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode: 'grid',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 2,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 768,
        cols: 2,
    }, {
        width: 568,
        cols: 1,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 30
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeOut',
    gapHorizontal: 50,
    gapVertical: 50,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    plugins: {
        loadMore: {
            element: "#js-loadMore-lightbox-gallery",
            action: "click",
            loadItems: 5,
        }
    }

})
    .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");

            }
        });
    })
    .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    });



    // wow js activation
    new WOW().init();
    
   

    //go to top
    $('.go-to-top').hide();

    $(window).scroll(function(){
        if($(window).scrollTop()<500){
            $('.go-to-top').fadeOut();
        }else{
            $('.go-to-top').fadeIn();
        }
    });

    $(".go-to-top").click(function(){
        $("html,body").animate({
            scrollTop: 0
        },1500)
    });



    //nav bar a 

    $('.my-nav .navbar-nav a[href^="#"]').click(function(e){
        e.preventDefault();

        var target = this.hash;

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);


    });
});
 