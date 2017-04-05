
$(document).ready(function(){
 
 

$("#ssmall").click(function() {
  
 $('#ddtry').addClass('ttext').removeClass('ttext2');
 $('#ddtry').removeClass('ttext3');
 });
 $("#mmedium").click(function() {
 $('#ddtry').addClass('ttext2').removeClass('ttext');
 $('#ddtry').removeClass('ttext3');
 });
 $("#llarge").click(function() {
   
 $('#ddtry').addClass('ttext3').removeClass('.ttext2');
 $('#ddtry').removeClass('ttext');
 });
});



function scrollWin(){

    window.scrollTo(0,0);
}

