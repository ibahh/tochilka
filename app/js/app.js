import $ from 'jquery';
import 'slick-carousel';

$(function(){
	$('.rev .body').slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 15000,
		arrows: false,
		fade: true,
		infinite: true,
		pauseOnHover: false,
		rows: 0,
	  });

		let header = $('.top-part.head');
		 
		$(window).scroll(function() {
		  if($(this).scrollTop() > 1) {
		   header.addClass('header_fixed');
		   
		  } else {
		   header.removeClass('header_fixed');
		  }
		});
		$('a[href^="#"').on('click', function() {

			let href = $(this).attr('href');
		
			$('html, body').animate({
				scrollTop: $(href).offset().top
			});
			return false;
		});
		// if($(this).scrollTop() > 1) {
		// 	header.css({
		// 	  'padding': '5px 0',
		// 	  'background': '#f6ffdb',
		// 	  'transition': '.3s'
		// 	});
		// } else {
		// 	header.css({
		// 	  'padding': '15px 0',
		// 	  'background': '#ffffff',
		// 	  'transition': '.3s'
		// 	});
		// }

})
