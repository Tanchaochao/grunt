/* 
* @Author: Marte
* @Date:   2016-06-03 09:21:53
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-22 13:50:22
*/
;(function (a, undefined) {
    a.alert = function(msg,delay){
        $(".tooltips").remove();
        var $hint = $('<div class="tooltips"><div class="tooltips-container"><div class="tooltips-bg"></div><div class="tooltips-content"><p>' +msg+'</p></div></div></div>');
        $('body').append($hint);
        $hint.animate({opacity:"0.8"},350);
        window.setTimeout(function(){
            $hint.animate({opacity: 0},800,function(){
                $hint.remove();
            });
        },delay||2000);
    }
})(window.App = window.App || {});
/* 
* @Author: Marte
* @Date:   2016-06-03 09:21:53
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-22 13:50:15
*/
;(function (a, undefined) {
    var defaults = {
        msg:"请输入消息",
        ok:function(){},
        cancel:function(){}
    } ;
    a.confirm = function(){
        para = $.extend( true, {},defaults, para );
        para.num = Math.ceil(Math.random()*10000);
        $(document.body).append(_.template(TPL["src/tpl/confirm.html"])(para)) ;
        $("#confirm"+para.num).modal("show") ;
        $("#confirm"+para.num).on("click",".btn-success",function(){
            $("#confirm"+para.num).modal("hide").on("hidden.bs.modal",function(){
                $("#confirm"+para.num).remove() ;
                para.ok.apply() ;
            }) ;
        }) ;
        $("#confirm"+para.num).on("click",".btn-danger",para.cancel);
    }
})(window.App = window.App || {});
/* 
* @Author: Marte
* @Date:   2016-06-02 10:49:49
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-22 13:48:13
*/
;(function (a, undefined) {
    a.init = function(){
        //ie placeholder,placehoder.js编译在 bootstrap.min.js中
        if(/msie/.test(navigator.userAgent.toLowerCase())){
            $('input:not(".diy"), textarea:not(".diy")').placeholder({ customClass: 'text-muted' });
        }

        alert("App is inited!") ;
    }
})(window.App = window.App || {});

/*模板*/
;(function (templates, undefined) {
  templates["src/tpl/confirm.html"] = "<div class=\"modal fade\" id=\"confirm<%=num%>\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmLabel\" aria-hidden=\"true\">\n" +
    "      <div class=\"modal-dialog modal-sm\">\n" +
    "        <div class=\"modal-content\">\n" +
    "          <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\" class=\"icon icon_close\"></span><span class=\"sr-only\">Close</span></button>\n" +
    "            <h4 class=\"modal-title\">删除确认</h4>\n" +
    "          </div>\n" +
    "          <div class=\"modal-body\">\n" +
    "            <p class=\"text-center\"><%=msg%></p>\n" +
    "          </div>\n" +
    "          <div class=\"modal-footer\" style=\"text-align:center !important;\">\n" +
    "            <div class=\"line\"></div>\n" +
    "            <button type=\"button\" class=\"btn btn-success btn-sm w50\">是</button>\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-sm w50 ml40\" data-dismiss=\"modal\">否</button>\n" +
    "          </div>\n" +
    "        </div><!-- /.modal-content -->\n" +
    "      </div><!-- /.modal-dialog -->\n" +
    "    </div><!-- /.modal -->";
})(this.TPL = this.TPL || {});