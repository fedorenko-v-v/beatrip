$(document).ready(function() {

	$('.sliderHeader').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		 fade: true
	});

	// $("#nameI").mask("+7(999)-999-9999");
	//
	$('.btnMM').on('click', function(event) {
		$('.mainMenu').toggleClass('open');
	});
	//
	// $('#toTop').click(function() {
	// 	$('body,html').animate({scrollTop:0},800);
	// });
	//
	// $(window).scroll(function() {
	//     if($(this).scrollTop() != 0) {
	//       $('#toTop').fadeIn();
	//     }
	//     else {
	//       $('#toTop').fadeOut();
	//     }
	//   });

});
