$(document).ready(function(){
   $(window).scroll(function(){

     if((this).scrollTop() > 40){
         $("#top").fadeIn();
     }
     else {
         $("#top").fadeOut();
     }
 });

 $("#top").click(function(){
     $("html,body").animate({ scrollTop : 0 }, 800);

 });
});
