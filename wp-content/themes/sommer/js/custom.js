(function($) {
$( document ).ready(function() {
    carousels();
    menuScroll();
    boldMenuItemsOnScroll();
    mobileMenu();
});

function carousels() {
    //carousel example
    /*var carousel1 = new Glide('.glide_carousel', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000,
        hoverpause: false,
        centered:true,
        paddings: 10,
    }).mount()*/
}

function menuScroll() {
    $(".main-navigation a").click(function(e) {
        e.preventDefault();

        var link = $(this).attr('href');
        if (!link.includes("#")) {
            window.location.href = link;
            return;
        }

        var start = link.indexOf("#") + 1;
        var anchor = link.substring(start);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + anchor).offset().top 
        }, 800);
        closeNav()
        
    });
}
function mobileMenu() {
    $('.toggle-menu').click(function() {
        if ($(this).hasClass('open')) {
            closeNav()
        } 
        else {
            openNav()
        }
        
        $(this).toggleClass('open');
    })

    $('.close-menu').click(function() {
        closeNav();
        $('.toggle-menu').removeClass('open');
    })
}
function openNav() {
    $('#primary-menu').css('right', '0px');
    $("#close_main_menu").css('display', 'block');
}

function closeNav() {
    $('#primary-menu').css('right', '-320px');
    $("#close_main_menu").css('display', 'none');
}

function boldMenuItemsOnScroll() {
    var sections = $('.section')
    var nav = $('#site-navigation')
    var nav_height = nav.outerHeight();
 
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
            
                $(this).addClass('active');
                nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
}

})( jQuery );