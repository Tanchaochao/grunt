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