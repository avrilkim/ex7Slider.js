(function($){

    $.fn.exslider = function(){

        var sliderL;
        var wrapW;
        var conW;
        var init;
        var $this = this;
        var goNext;
        var goPrev;
        var motionT = 300;
        var goNextBtn;
        var goPrevBtn;
        var autoPlay;
        var playCnt;

        init = function(){

            playCnt = 0;

            //cssSet
            $this.find('> div').css({'float':'left'});
            $this.wrap('<div class="exsliderWrap"></div>');
            $('.exsliderWrap').append("<p class='exNextBtn'>next</p>");
            $('.exsliderWrap').append("<p class='exPrevBtn'>prev</p>");

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

            //makeBtn
            goNextBtn = $('.exNextBtn');
            goPrevBtn = $('.exPrevBtn');

            goNextBtn.on('click', function(){
                goNext();
            });

            goPrevBtn.on('click', function(){
                goPrev();
            });
        };

        goNext = function(){
            if(playCnt < sliderL-1){
                playCnt++;
            }else{
                playCnt = 0;
            }
            console.log('current count :::: ' + playCnt);
            $this.animate({
                'marginLeft': -wrapW * playCnt
            }, motionT)
        };

        goPrev = function(){
            if(playCnt > 0 ){
                playCnt--;
            }else{
                playCnt = sliderL-1;
            }
            console.log('current count ::: ' + playCnt);
            $this.animate({
                'marginLeft': -wrapW * playCnt
            }, motionT)
        };

        init();

        setTimeout(function(){
            goNext();
        }, 3000);

        return this;

    };

}(jQuery));
