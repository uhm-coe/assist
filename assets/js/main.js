$(document).ready(function(){

	/**
	 * @name: formatPostContent()
	 * @author: Myles Enriquez
	 * @date: 20160125
	 * @description: Adds bootstrap syntax to elements within post to make a post responsive.
	 * This is needed because markdown does not have content formatting capabilities.
	 *
	 * @params: null
	 * @returns: null
	 */
	function formatPostContent() {
		// Each li contains a line break
		$('#postcontent li').each(function(){
			$(this).after('<hr/>');
		});

		// Each li has a class of 'row'
		$('#postcontent li').each(function(){
			$(this).addClass('row');
		});

		// Each p inside of a li contains a class of 12 for xs devices and 6 for medium devices
		$('#postcontent li p').each(function(){
			$(this).addClass('col-xs-12 col-md-6');
		});
	}
	formatPostContent();

	/**
	 * @name: formatPostContent()
	 * @author: Myles Enriquez
	 * @date: 20160217
	 * @description: Adds custom tip styling to any paragraph containing a tip. Needed because there is no syntax for writing
	 * tips in markdown.
	 *
	 * @params: null
	 * @returns: null
	 */
	 function addTipStyling() {
	 		$('#postcontent li p').each(function(){
	 			var paragraphContent = $(this).html();
	 			var searchFor = "TIP";

	 			if(paragraphContent.toUpperCase().substring(0, searchFor.length) === searchFor ) {
	 				$(this).addClass('tip-styling');
	 			}

	 		});
	 }
	 addTipStyling();


	 /**
	 * @name: backToTopButton()
	 * @author: Myles Enriquez
	 * @date: 20160216
	 * @description: Adds a back to top button when user scrolls down on page.
	 *
	 * @params: null
	 * @returns: null
	 */
	function backToTopButton() {
		var offset = 300, // how many pixels scrolled until back to top btn appears
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

		// Hide or show the "back to top" button
		$(window).scroll(function(){
			$(this).scrollTop() > offset ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) {
				$back_to_top.addClass('cd-fade-out');
			}
		});

		// Ease into scroll top
		$back_to_top.on('click', function(event) {
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0,
				}, scroll_top_duration
			);
		});
	}
	backToTopButton();

	/**
	*	@name: Sidebar carrot toggle.
	* @author: James Park
	* @date: 20160303
	* @description: Toggles carrot down/up depending on (un)collapsed list.
	*/
	$('#categories').on('hidden.bs.collapse shown.bs.collapse', function() {
		if ( $(this).hasClass("in") ) {
			$(".categoryjs").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
		} else {
			$(".categoryjs").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
		}
	})

	$('#tags').on('hidden.bs.collapse shown.bs.collapse', function() {
		if ( $(this).hasClass("in") ) {
			$(".tagjs").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
		} else {
			$(".tagjs").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
		}
	})
});
