
$(function(){
  $(".photo").draggable({
    handle:"img"
  });
});
$(function(){
  $(".cook").draggable({
    handle:"img"
  });
});
$(function(){
  $(".jp").draggable({
    handle:"img"
  });
});
$(function(){
  $(".ko").draggable({
    handle:"img"
  });
});
$(function(){
  $(".code").draggable({
    handle:"img"
  });
});
$(function(){
  $(".law").draggable({
    handle:"img"
  });
});
$(function(){
  $(".mov").draggable({
    handle:"img"
  });
});

$(document).ready(function(){
  $(".mov1").hide();
});
$(document).ready(function(){
  $(".return").hide();
});
$(document).ready(function(){
  $(".doc").hide();
});
$(".cook1").hide();
$(".photo1").hide();
$(".law1").hide();
$(".jp1").hide();
$(".ko1").hide();
$(".code1").hide();
$(document).ready(function(){
  $(".photo").click(function(){
   var b=$(this).offset().top;
   var a=$(this).offset().left;
   if(b<130&&b>40&&a>-25&&a<65)
      $(".photo1").fadeIn(500);
   else
      $(".photo1").hide();
   });    
});
$(document).ready(function(){
  $(".cook").click(function(){
   var d=$(this).offset().top;
   var c=$(this).offset().left;
   if(d<130&&d>30&&c>170&&c<270)
      $(".cook1").fadeIn(500);
   else
      $(".cook1").hide();
   });    
});
$(document).ready(function(){
  $(".jp").click(function(){
   var e=$(this).offset().top;
   var f=$(this).offset().left;
   if(f>380&&f<470&&e<210&&e>120)
      $(".jp1").fadeIn(500);
   else
      $(".jp1").hide();
   });    
});
$(document).ready(function(){
  $(".ko").click(function(){
   var b=$(this).offset().top;
   var a=$(this).offset().left;
   if(b<370&&b>280&&a<670&&a>580)
      $(".ko1").fadeIn(500);
   else
      $(".ko1").hide();
   });    
});
$(document).ready(function(){
  $(".code").click(function(){
   var y=$(this).offset().top;
   var x=$(this).offset().left;
   if(y<600&&y>510&&x>770&&x<860)
      $(".code1").fadeIn(500);
   else
      $(".code1").hide();
   });    
});
$(document).ready(function(){
  $(".law").click(function(){
   var f=$(this).offset().top;
   var e=$(this).offset().left;
   if(f>800&&f<950&&e<1000&&e>850)
      $(".law1").fadeIn(500);
   else
      $(".law1").hide();
   });    
});
$(document).ready(function(){
  $(".mov").click(function(){
   var y=$(this).offset().top;
   var x=$(this).offset().left;
   if(y>1150&&y<1300&&x>950&&x<1050)
      $(".mov1").fadeIn(500);
   else
      $(".mov1").hide();
   });    
});

$(".mov1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".photo1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".cook1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".jp1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".ko1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".code1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".law1").click(function(){
  $(".doc").fadeIn(1000);
  $(".return").fadeIn(100);
});
$(".return").click(function(){
  $(".doc").fadeOut(1000);
  $(".return").fadeOut(100);
  $(".photo1").fadeOut(2000);
  $(".law1").fadeOut(2000);
  $(".mov1").fadeOut(2000);
  $(".cook1").fadeOut(2000);
  $(".jp1").fadeOut(2000);
  $(".ko1").fadeOut(2000);
  $(".code1").fadeOut(2000);
});


