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