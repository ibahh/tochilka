import $ from 'jquery';
import 'slick-carousel';
$(function(){
	$('.rev .body').slick({
		dots: false,
		autoplay: false,
		autoplaySpeed: 15000,
		arrows: true,
		fade: true,
		infinite: true,
		pauseOnHover: false,
		rows: 0,
	  });
})
