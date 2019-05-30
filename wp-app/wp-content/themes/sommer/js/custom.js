jQuery( document ).ready(function() {
    carousels();
    menuScroll();
    boldMenuItemsOnScroll();
});

function carousels() {
    //carousel example
    var carousel1 = new Glide('.glide_carousel', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000,
        hoverpause: false,
        centered:true,
        paddings: 10,
    }).mount()
}

function menuScroll() {
    jQuery(".main-navigation a").click(function(e) {
        e.preventDefault();

        var link = jQuery(this).attr('href');
        if (!link.includes("#")) {
            window.location.href = link;
            return;
        }

        var start = link.indexOf("#") + 1;
        var anchor = link.substring(start);

        jQuery([document.documentElement, document.body]).animate({
            scrollTop: jQuery("#" + anchor).offset().top 
        }, 800);
        closeNav()
        
    });
}

function openNav() {
    document.getElementById("primary-menu").style.right = "0px";
    document.getElementById("close_main_menu").style.display = "inline-block";
}

function closeNav() {
    document.getElementById("primary-menu").style.right = "-320px";
    document.getElementById("close_main_menu").style.display = "none";
}

function boldMenuItemsOnScroll() {
    var sections = jQuery('.section')
    var nav = jQuery('#site-navigation')
    var nav_height = nav.outerHeight();
 
    jQuery(window).on('scroll', function () {
        var cur_pos = jQuery(this).scrollTop();

        sections.each(function() {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
            
                jQuery(this).addClass('active');
                nav.find('a[href="/#'+jQuery(this).attr('id')+'"]').addClass('active');
            }
        });
    });
}

