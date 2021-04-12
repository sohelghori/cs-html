/* ************** spotlight section  slider *************** */
	$('#owl-spot').owlCarousel({
			loop:false,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			margin:25,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1,
					loop:true
				},
				500:{
					items:2,
					loop:true
				},
				700:{
					items:3,
					loop:true
				},
				991:{
					items:3,
					loop:true
				},
				1000:{
					items:4
				}
			}
		})
		
/* *************** testimonials slider *************** */
		
		$('#owl-test').owlCarousel({
			loop:false,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			margin:25,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1,
					loop:true
				},
				500:{
					items:2,
					loop:true
				},
				700:{
					items:3
				},
				1000:{
					items:3
				}
			}
		})
	
/* *************** main slider *************** */
		$('.carousel').carousel({
		  interval: 3500
		})


/* *************** scroll to top *************** */
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 150) {
				$('.scroll-top').addClass('open');
				
			}
			else {
				$('.scroll-top').removeClass('open');
				
			}
		});

		

/* *************** clock wise animation for circles*************** */
            $(function () {

                window.setInterval(function () {
                    var li = $('.js-animation-list').find("li[class='js-circle']");

                    if (li.is(':last-child')) {
                        $('.js-animation-list li').first().addClass('js-circle');
                    } else {
                        li.next('li').addClass('js-circle');
                    }
                    li.removeClass('js-circle');
                }, 2000);
            }); 
       
/* *************** fixed header on scroll *************** */
			
				
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 100) {
				$('.menu-wrapper').addClass('fixed-header');
				
			}
			else {
				$('.menu-wrapper').removeClass('fixed-header');
				
			}
		});
        
		
/* *************** Toggle menu *************** */	

		$('#toggle').click(function() {
		   $(this).toggleClass('active');
		   $('#overlay').toggleClass('open');
		  });
		  
	    $('.nav-link').click(function() {
			$(this).toggleClass('active');
		   $('#overlay').toggleClass('open');
		});
	
/* *************** Animation On Load *************** */	

	   new WOW().init();
	   

/* *************** animated circle js when section comes in view port  *************** */	
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	  };
		
	})(jQuery);

	$(window).scroll(function(event) {
	  
	  $(".circular-menu").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("show-circles"); 
		} else {
		  el.removeClass("show-circles");
		}
	  });
	  
	});
			
/* *************** Tooltip *************** */		   
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* *************** modal popup should hide after 4 seconds automatically *************** */
/*
setTimeout(function(){
  $('#myModal').modal('hide')
}, 4000);
*/

		