(function($) {
    "use strict";
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');
    
    /*--
    sticky header
    -----------------------------------*/
    $win.scroll(function() {
        if ($(this).scrollTop() > 130){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

    /*--
        isotope
        -----------------------------------*/
    if ($('.breed-list').length>0){
        var $grid = $('.breed-list').isotope({
            itemSelector: '.breed-item',
        });
        $('.search-filter').on( 'click', 'li>a', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

    
})(jQuery);