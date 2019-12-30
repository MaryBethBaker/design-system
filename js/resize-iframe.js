$(document).ready(function(){
    $('#resize-iframe-mobile').click(function(){
        $('.example-frame').animate({width:'300px'},200);
    });
    $('#resize-iframe-tablet').click(function(){
        $('.example-frame').animate({width:'600px'},200);
    });
    $('#resize-iframe-desktop').click(function(){
        $('.example-frame').animate({width:'1000px'},200);
    });
});

function resizeIframe(obj) {
    //obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    //console.log(obj.contentWindow.document.documentElement.scrollHeight + 'px');
   if ($(obj).is(":visible")) {
       obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
   } else {
       $(obj).css("visibility", "hidden");
       $(obj).parent().removeClass("hidden");
       obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
       $(obj).css("visibility", "");
       $(obj).parent().addClass("hidden");
   }
    
    
}
