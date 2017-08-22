// 中文字两个字节
$.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for(var i = 0; i < value.length; i++){
        if(value.charCodeAt(i) > 127){
            length++;
        }
    }
  return this.optional(element) || ( length >= param[0] && length <= param[1] );   
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));


// 邮政编码验证   
$.validator.addMethod("isZipCode", function(value, element) {   
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");


$.metadata.setType('attr','validate') ;

$.validator.setDefaults({
    errorClass:'form-error',
    focusInvalid:false,  
    focusCleanup:true, 
    ignore:"",
    onfocusout:function(element){
       $(element).valid();
   	},
   	errorPlacement:function(error,element){
   		var position = element.attr("position") ;
   		if(position){
   			error.css({"left":position.split(",")[0]+"px","top":position.split(",")[1]+"px"}) ;
   		}
   		element.parent().css({"position":"relative"}).append(error); 
    }  
});  