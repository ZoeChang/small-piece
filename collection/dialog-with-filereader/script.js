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
      $( "#dialog" ).dialog( "open" );
    });
});

// Show colorlist
$(function(){
    var color = [];
    var prodno = [];
    var colorno = [];
    $.getJSON('https://spreadsheets.google.com/feeds/list/1J6sBqsApuu1DK_SodrNbbBsHKpkfHHWsYfyAaqx3Bz4/od6/public/values?alt=json', function (data){
        for (var i=0; i < data.feed.entry.length; i++){
            color[i] = data.feed.entry[i].gsx$color.$t;
            prodno[i] = data.feed.entry[i].gsx$prodno.$t;
            colorno[i] = data.feed.entry[i].gsx$colorno.$t;
            $('#colorlist').append("<tr><td class='coloricon' style='background:" + colorno[i] + "'>" + "</td><td>" + color[i] + "</td><td>" + prodno[i] + "</td></tr>");
            //  .append 是jquery mothod 在元素的lastchild後面插入內容
        }
    });
});

// Test ul and li using this way
$(function() {
    var Proddes = [];
    var Pattern = [];
    var Category = [];
    var Sizerun = [];
    $.getJSON('https://spreadsheets.google.com/feeds/list/1J6sBqsApuu1DK_SodrNbbBsHKpkfHHWsYfyAaqx3Bz4/od6/public/values?alt=json', function(data) {
      // Proddes[0] = data.feed.entry[0].gsx$ProdDes.$t;
      // $('#proddes').prepend(Proddes[0]);

      Pattern[0] = data.feed.entry[0].gsx$patternno.$t;
      $('#pattern').append(Pattern[0]);


    });
});
// 以上為colorlist
