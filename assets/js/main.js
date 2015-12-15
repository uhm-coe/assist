$(function() {
	// Calculate top of sidebar container in relation to window
	var stickyTop = $('.sidebar-container').offset().top;

	// Calculate the current position of window top (will change as user scrolls)
	$(window).scroll(function(){
		var windowTop = $(window).scrollTop();
	
		if (stickyTop < windowTop) {
			$('.sticky').css({ position: 'fixed', top: 0 });
		}
		else {
			$('.sticky').css('position', 'static');
		}
	});
});
