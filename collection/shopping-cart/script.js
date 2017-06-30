$(function () {
    
    var json;
    
    //以下為json 資料轉 html
    function show (data) {
        var html = "";
        
        for (var i = 0; i < data.length ; i++){
            
            html += "<div class=\"showcaseinner\" data-num=\"" + data[i].num + "\">";
            html += "<div class=\"item\">" + data[i].item + "</div>";
            html += "<img src=\"" + data[i]["photo"] + "\">";
            html += "<div class=\"price\"> USD. " + data[i].price + "</div>";
            html += "</div>";
        };
        
        $("#showcase").html(html);
        
        if(cart.length == 0){
            $("table").hide();
        }
    };
    
    
    $.getJSON("itemlist.json", function(data) { 
        json = data;  
        show(json);
    });
    
    
    
    var cart=[];
    
    //小計
    function subtotal(id){
        // get quantity from select option
        var Q = $("#qu-"+id).val();
        
        // calculate and show sum
        var price = $("#price-" + id).text()
        $("#sum-" + id).text((price * Q).toFixed(2));
        
        
        // save in cart arr.
        var resutl = cart.filter(function(obj){
            return obj.item.replace(/ /g, "-") == id;
        });
        
        resutl[0].quantity = Number(Q);
        resutl[0].subtotal = Number((price * Q).toFixed(2));
        
    }
    
    //total
    function total(){
        var total = 0; 
        for (var i = 0; i < cart.length; i++){
            total += cart[i].subtotal;
        };
        
        total = total.toFixed(2);
        
        $("#total").empty().text(total);
    }
    
    
    //插入shopping list
    function list(data){
        var html="";
        
        var id = data.item.replace(/ /g, "-");

            html += "<tr id=\"item-" + id + "\">";
            html += "<th><button id=\"but-" + id + "\"><span class=\"ui-icon ui-icon-closethick\"></span></button></th>"
            html += "<th>" + data.item + "</th>";
            html += "<th id=\"price-" + id + "\">" + data.price + "</th>";
            html += "<th><select id=\"qu-" + id + "\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></th>";
            html += "<th id=\"sum-" + id + "\"></th>";
            html += "</tr>";
        
        $("#shoppingList").append(html);
        
        subtotal(id);
        total();
        
    };
    
    //將click項目 加入shopping list 及 cart
    $(".showcase").on("click" , ".showcaseinner" , function(e){
        
        // showIndex 取得 click對象 在 json裡的index
        var showIndex = $(this).data("num") -1;
        
        //判斷是否已經出現在shopping list
        if (cart.filter(function(obj){
            // item, 目前cart裡的obj; search,選到的obj;
            var item = obj.item;
            var search = json[showIndex].item;
            
            return (item == search);
        }).length == 0 ){
            
            //將click物件放入 cart 最後
            var newData = $.extend(true, {}, json[showIndex]);

            cart.push(newData);
            
            //建立新屬性 quantity 及 subtotal;
            cart[cart.length -1].quantity = 0;
            cart[cart.length -1].subtotal = 0;
            
            list(cart[cart.length -1]);
                
        } else {
            alert("已加入購物車");
        };
        
        if (cart.length != 0){
            $("table").show();
        }
        
    });
    
    
    //選數量 小計
    $("#shoppingList").on("change","select",function(){
        var index = $(this).attr("id").substring(3);
        subtotal(index);
        total();
    });
    
    
    //delete from shopping list and cart arr.
    $("#shoppingList").on("click","button",function(){
        
        //取得item
        var id = $(this).attr("id").substring(4);
        
        //移除html
        $("#item-" + id).remove();

        //移除cart陣列內元素
        for(var i = 0; i < cart.length; i++){
            if (cart[i].item.replace(/ /g, "-") == id){
                cart.splice(i, 1);
            }
        }
        
        total(); 
        
        if(cart.length == 0){
            $("table").hide();
        }
    });
    


});





