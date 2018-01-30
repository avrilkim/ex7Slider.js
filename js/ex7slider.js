(function($){

    $.fn.exslider = function(){

        var sliderL;
        var wrapW;
        var conW;
        var init;
        var $this = this;
        var goNext;
        var motionT = 300;

        init = function(){

            //cssSet
            $this.find('> div').css({'float':'left'});
            $this.wrap('<div class="exsliderWrap"></div>');

            //disableFloat
            $('.exsliderWrap').css({'float':'none', 'overflow':'hidden', 'width': wrapW});

            sliderL = $this.find('> div').length;
            //After image loaded, we can get image width
            $this.children().first().find('img').load(function(){
                wrapW = $('img').width();
                conW = wrapW * sliderL;

                $this.css({'width': conW});
                $this.parent().css({'width': wrapW});
            });

        };

        goNext = function(){
            $this.animate({
                'marginLeft': -wrapW
            }, motionT)
        };

        init();

        setTimeout(function(){
            goNext();
        }, 3000);

        return this;

    };

}(jQuery));
