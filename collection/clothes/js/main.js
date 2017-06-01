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
    $( ".showdetail" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
});

$(function(){
    //按小圖切換大圖
    //顯示大圖用
    var $bigimg = $("#big-img");
    
    //當click sycingbar的某個img時
    $(".sycingbar img").click(function(){
        //把#big-img的src 改成被的點到的img的位置
        $bigimg.attr('src', $(this).attr('src'));
    });
});