(function($){
    $(document).ready(function () {


        //$('#nav-wrapper').height($(".navbar").height());

        $('.navbar').affix({
            offset: { top: $('.navbar').offset().top + $('#nav-wrapper').height() }
        });

        $('.navbar').on('affixed.bs.affix', function () {
            $(".navbar").addClass('animated object-visible fadeInDown');
        });

        $('.navbar').on('affixed-top.bs.affix', function () {
            $(".navbar").removeClass('animated object-visible fadeInDown');
        });
        

 

	    //Smooth Scroll
	    //-----------------------------------------------
        $('.smooth-scroll a, a.smooth-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                    return false;
                }
            }
        });




	}); // End document ready

})(this.jQuery);