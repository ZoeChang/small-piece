$().ready(function(){
    $(".photobox").hover(function(){
        $(this).addClass("boxslip")},
        function(){
        $(this).removeClass("boxslip")
    })
})

