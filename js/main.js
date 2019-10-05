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
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass("sticky");
        }
    });


    
})(jQuery);