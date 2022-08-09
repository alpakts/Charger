'use strict';
$(document).ready(function() {
	
	

	/***************** Waypoints ******************/
	var height=window.screen.height
	var widths=window.screen.width
	var h1=window.outerHeight ;
	var w1=window.outerWidth;
	console.log(widths)
	$('.hero').css({
		"min-height":height-100
		
	});
	$(".backgroundss").css({
		"min-height":height-100
	});
	$(".imagediv").css({
		"width":w1,
		"max-width":w1,
		"max-height":h1-200,
		
	});
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});
	
	/***************** Header BG Scroll ******************/
	
		
		
	
	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 40) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "29.5px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
				$("section .navigation").css({
					"height":"90px"
				});
				$(".imgsize").css({
					"height":"40px"
				});
			
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "43px",
				});
				$('header .navicon').css({
					"top": "20px",
				});
				
				$("section .navigation").css({
					"height":"110px"
				});
				
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});

function myFunction() {
	
	var w = window.screen.width;
	var h = window.screen.height;
	var h1=window.outerHeight ;
	var w1=window.outerWidth;
	console.log(w,h)
	console.log(w1,h1)
	$('.hero').css({
		"min-height":h-100
		
	});
	$(".backgroundss").css({
		"min-height":h-100
	});
	$(".imagediv").css({
		"width":w1,
		"max-width":w1,
		"max-height":h1-200,	
		
	})
	
  }