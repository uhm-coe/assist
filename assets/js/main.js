$(document).ready(function(){

	/**
	 * @name: formatPostContent()
	 * @author: Myles Enriquez
	 * @date: 20160125
	 * @description: Adds bootstrap syntax to elements within post to make
	 * a post responsive.
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
	 * @name: stickyElement()
	 * @author: Myles Enriquez
	 * @date: 20160125
	 * @description: Will make an element 'sticky' by sticking it to top of viewport when the two touch.
	 *
	 * @params: {String} classOfElement Class name given to the element
	 * @returns: null
	 */
	function stickyElement(classOfElement) {
		var stickyTop = $(classOfElement).offset().top;

		$(window).scroll(function(event) {
			var windowTop = $(window).scrollTop();

			if (stickyTop < windowTop) {
				$(classOfElement).css(
					{
						'position': 'fixed',
						'width': '212.5', // TODO: change to percentage
						'top': '0'
					});
			}
			else {
				$(classOfElement).css({'position':'static'});
			}
		});
	}
	// stickyElement('.sidebar-content');

});
