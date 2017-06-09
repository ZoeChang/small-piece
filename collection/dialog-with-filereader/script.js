$(function() {
    // dialog的設定
    // 多個設定用逗號“,”分開
    $( "#dialog" ).dialog({
      autoOpen: false, //不要自動開啟
      draggable: false, //關閉滑鼠拖曳
      modal: true,//鎖定頁面功能，僅能點選dialog box的元件
      height: 600,
      width: 1000,
      dialogClass: "dialogsetting"//dialog外觀設定
    });

    // click 時 執行 dialog
    // 原標籤為button換成div也可以執行
    $( ".circle" ).on( "click", function() {
        
        //清空colorlist
        $( "#colorlist" ).empty();
        
        //開啟 dialog
        $( "#dialog" ).dialog( "open" );
        
        //取得id
        var circleId;
        circleId = $(this).attr("id");
        
        //取得資料
        var Proddes = [];
        var Pattern = [];
        var Category = [];
        var Sizerun = [];

        var color = [];
        var prodno = [];
        var colorno = [];
        
        $.getJSON('https://spreadsheets.google.com/feeds/list/1J6sBqsApuu1DK_SodrNbbBsHKpkfHHWsYfyAaqx3Bz4/od6/public/values?alt=json', function (data){
            // 用for迴圈將資料填入陣列中
            for (var i=0; i < data.feed.entry.length; i++){
                Proddes[i] = data.feed.entry[i].gsx$proddes.$t;
                Pattern[i] = data.feed.entry[i].gsx$pattern.$t;

                color[i] = data.feed.entry[i].gsx$color.$t;
                prodno[i] = data.feed.entry[i].gsx$prodno.$t;
                colorno[i] = data.feed.entry[i].gsx$colorno.$t;

            };
            
            //r
            var i = 0;
            while(Pattern[i] == circleId){
                  
            };
                  

            //只列出id與pattern相同之colorlist
            for (var i=0; i < data.feed.entry.length; i++){

                //顯示id與pattern相同之資料
                if(Pattern[i] == circleId){
                    
                    $('#colorlist').append("<tr><td class='coloricon' style='background:" + colorno[i] + "'>" + "</td><td>" + color[i] + "</td><td>" + prodno[i] + "</td></tr>");
                    //  .append 是jquery mothod 在元素的lastchild後面插入內容
                    
                };

                
            };
        
        });
        
    });
    
    
});

// Show colorlist
//$(function(){
//    var Proddes = [];
//    var Pattern = [];
//    var Category = [];
//    var Sizerun = [];
//    
//    var color = [];
//    var prodno = [];
//    var colorno = [];
//    $.getJSON('https://spreadsheets.google.com/feeds/list/1J6sBqsApuu1DK_SodrNbbBsHKpkfHHWsYfyAaqx3Bz4/od6/public/values?alt=json', function (data){
//        // 用for迴圈將資料填入陣列中
//        for (var i=0; i < data.feed.entry.length; i++){
//            Proddes[i] = data.feed.entry[i].gsx$proddes.$t;
//            Pattern[i] = data.feed.entry[i].gsx$pattern.$t;
//            
//            color[i] = data.feed.entry[i].gsx$color.$t;
//            prodno[i] = data.feed.entry[i].gsx$prodno.$t;
//            colorno[i] = data.feed.entry[i].gsx$colorno.$t;
//            
//        };
//        
//        //對比所有資料
//        for (var i=0; i < data.feed.entry.length; i++){
//            
////            //顯示id與patternno相同之資料
////            if(Pattern[i] == )
//            
//            $('#colorlist').append("<tr><td class='coloricon' style='background:" + colorno[i] + "'>" + "</td><td>" + color[i] + "</td><td>" + prodno[i] + "</td></tr>");
//            //  .append 是jquery mothod 在元素的lastchild後面插入內容
//        };
//        
//    });
//});

// Test ul and li with getJSON
// Show Prod no
//$(function() {
//    var Proddes = [];
//    var Pattern = [];
//    var Category = [];
//    var Sizerun = [];
//    $.getJSON('https://spreadsheets.google.com/feeds/list/1J6sBqsApuu1DK_SodrNbbBsHKpkfHHWsYfyAaqx3Bz4/od6/public/values?alt=json', function(data) {
//    
//        Proddes[0] = data.feed.entry[0].gsx$proddes.$t;
//        $('#proddes').prepend(Proddes[0]);
//        
//      Pattern[0] = data.feed.entry[0].gsx$pattern.$t;
//      $('#pattern').append(Pattern[0]);
//
//
//    });
//});

//$(function(){
//    
//    $(".circle").mouseover(function(){
//        var x = $(this).attr("id");
//        document.getElementById("demo").innerHTML = x;
//    });
//    
//});