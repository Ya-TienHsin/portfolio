// 第二部分tab切換頁與債券、股票切換
$(document).ready(function() {
  
  var $wrapper = $('.tab-wrapper'),
      $allTabs = $wrapper.find('.tab-content > div'),
      $tabMenu = $wrapper.find('.tab-menu li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  $allTabs.not(':first-of-type').hide();  
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });

});


$(".market_first").on("click", ".signal_2", function(e) {
  e.preventDefault();

  $(".signal_2").removeClass("active");
  $(".right_all").removeClass("show");
  $(this).addClass("active");
  $($(this).attr("href")).addClass("show");
});
//end

// M版轉換成lightbox
$(document).ready(function() {
  if ($(window).width() < 769) {
    $(".signal_2").removeClass("active");
    $(".right_all").removeClass("show");
    $(".market_first").click(function() {
        $(".overlay").addClass("show");
        $("body").addClass("hidden");
    });
    $(".close_lightbox").click(function(){
      $(".overlay").removeClass("show");
      $(".right_all").removeClass("show");
      $("body").removeClass("hidden");
    })

  };
});