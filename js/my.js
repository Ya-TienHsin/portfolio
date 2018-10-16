$(function(){
	
	$("#SMALL img").click(function(){
		
		var N = $(this).attr("id").substr(2);
		
		$("#BIG").attr( "src" , "images/small" + N + ".jpg" );
		
	});
	$(".SMALL").on("click", ".SW_img", function(e) {
	  e.preventDefault();

	  $(".SW_img").removeClass("active");
	  $(".SW").removeClass("show");
	  $(this).addClass("active");
	  $($(this).attr("href")).addClass("show");
	});
	$('.owl-carousel').owlCarousel({
	  items: 1,
	  loop: true,
	  autoplay: true,
	  margin: 10,
	  nav: true,
	});
});

$(".navbar-toggle").click(function(){
	$(".navbar-toggle").toggleClass('active-toggle');
});
$(".navbar-nav li a").click(function(){
	$(".navbar-toggle").removeClass('active-toggle');
	$(".navbar-collapse").removeClass('in');
});
// // _____________________________________________________
// $(window).scroll(function() {

//     if ($(window).scrollTop() > 600) {
//         $('.navbar').addClass('sticky');
//     } else {
//         $('.navbar').removeClass('sticky');
//     }
// });

$(document).ready(function() {
	if ($(window).width() > 600) {
		var s = skrollr.init();//初始化
	};
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
	        $('#top').fadeIn("fast");       // Fade in the arrow
	    } else {
	        $('#top').fadeOut("fast");      // Else fade out the arrow
	    }
	});
	$('#top').click(function() {            // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                   // Scroll to top of body
	    }, 500);
	});
});

// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('#section2.link,.side', { 
  origin: 'bottom', 
  distance: '20px',
  easing: 'ease-out',
  reset: false,
  duration: 600,
  }, 150);

sr.reveal('#section6 .icon', { 
  origin: 'bottom', 
  distance: '40px',
  easing: 'ease-out',
  reset: false,
  duration: 1000,
  }, 150);
