
'use strict';


$(function(){

  function resize(){ 

var windowWidth = $(window).width();
// 判断大小
  var isSmallScreen = windowWidth < 768;
  
  $('#main_ad > .carousel-inner > .item').each(function (i, item){

        var $item = $(item);
        console.log(11333);
var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
         console.log(1114551);

        $item.css('backgroundImage', 'url("' + imgSrc + '")');
        
        if (isSmallScreen) {
        $item.html('<img src="' + imgSrc + '" alt="" />');
      } else {
        $item.empty();
      }
  });
}
  $(window).on('resize', resize).trigger('resize');

  $('[data-toggle="tooltip"]').tooltip();



  var $ulContainer = $('.nav-tabs');

  var width = 30; 
  $ulContainer.children().each( function(index, element) {
    // console.log(element.clientWidth);
    // console.log($(element).width());
    width += element.clientWidth;
  });

  if ( width > $(window).width()) {
    $ulContainer
      .css('width', width)
      .parent().css('overflow-x', 'scroll');
  }


     var $newTitle = $('.news-title');
    $('#news .nav-pills a').on('click',function() {
       var $this= $(this);

       var  title = $this.data('title');

       $newTitle.text(title);
      
    });

    $('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})         // 获取界面上的轮播属性 
            // 原生的方法carousel

     var $carousel = $('.carousel');
     var startX;
     var endX;
     var offset = 50;
     // 注册滑动事件
    $carousel.on('touchstart', function(e) {
       startX= e.originalEvent.touches[0].clientX;
        console.log(startX);
    });         
      $carousel.on('touchmove', function(e){
        endX = e.originalEvent.touches[0].clientX;
        //console.log(endX);
      }); 
    
     $carousel.on('touchend', function(e) {
         console.log(endX);
         // 获取手指每次运动距离
         var distance = Math.abs(startX - endX);
         if (distance > offset) {
         //console.log(startX > endX ? '←' ：'→');
         $(this).carousel(startX > endX ? 'next' : 'prev');
         }
     });
});
