$(document).foundation()

$(document).ready(function() {

	function mediaQ() {
		var mq = window.matchMedia( "(max-width: 1040px)" );
		if (mq.matches) {
			$('.main-banner__subcontainer-right').addClass('small-centered');
			$('.footer__btn').css('text-align', 'center');
			$('.main-banner__subcontainer-right').css('margin-bottom', '5%');
			$('.main-banner__container').removeClass('main-banner__container-height');
			$('.succ-container').removeClass('succ-container__banner');
		} else {
			$('.main-banner__subcontainer-right').removeClass('small-centered');
			$('.main-banner__container').addClass('main-banner__container-height');
			$('.succ-container').addClass('succ-container__banner');
		}
	}

	mediaQ();
	// media query for responsiveness
	$(window).resize(function() {
		mediaQ();
	});
});