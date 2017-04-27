// 以下為背景隨向下滑動漸變
/*

$(document).ready(function () {

    $(window).scroll(function () {

        var x = $(document).scrollTop();
        
        function rgb (r,g,b) {
            return ("rgb(" + r + "," + g + "," + b + ")");
        }

        if (x < 760) {
            var r, g, b;
        
            r = 255 - Math.round( x / 152 );
            g = 154 + Math.round( x / 14 );
            b = 158 + Math.round( x / 20 );
            
            $("body").css("background-color", rgb(r,g,b)) ;
        }
        if (x > 760 && x < 1520) {
            var r = 0, g = 0, b = 0;
            var y = x - 760;
        
            r = 250 + Math.round( y / 190 );
            g = 112 + Math.round( y / 6 );
            b = 154 - Math.round( y / 90 ); 
            
            $("body").css("background-color", rgb(r,g,b)) ;
        }
        if (x > 1520 && x < 2280) {
            var r, g, b;
        
            r = 255 - Math.round( x / 152 );
            g = 154 + Math.round( x / 14 );
            b = 158 + Math.round( x / 20 );
            
            $("body").css("background-color", rgb(r,g,b)) ;
        }  

    });

});

*/








// 以下為new test


