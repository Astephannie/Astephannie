
// NAVBAR EFFECT

$(document).ready(function() {
	var mainbottom = $('#menu').offset().top + $('#menu').height();

	$(window).on('scroll', function() {
		stop = Math.round($(window).scrollTop());
		if (stop > mainbottom) {
			$('.nav').addClass('navbar-fixed-top');
			$('.nav').addClass('past-main');
		} else {
			$('.nav').removeClass('navbar-fixed-top');
			$('.nav').removeClass('past-main');
		};
	});
			});