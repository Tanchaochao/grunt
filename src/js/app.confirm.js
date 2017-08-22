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