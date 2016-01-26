$(document).ready(function(){

	/**
	 *	@name: modalize()
	 *	@author: Myles Enriquez
	 * 	@date: 20160125
	 *	@description: Searches for all p elements that contain an image and creates a
	 * 	modal for that image.
	 *
	 *	@param: null
	 *	@return: null
	 */
	function modalize() {
		var counter = 0;
		$('p').each(function(){
			// String which contains the inner html of each paragraph
			var innerParagraphHtmlStr = $(this).html();
			var searchFor = "<img";

			// For each string that contains "<img" (paragraph that contains and image)
			if (innerParagraphHtmlStr.substring(0, searchFor.length) === searchFor) {
				console.log(innerParagraphHtmlStr);
				innerParagraphHtmlStr = insertString(innerParagraphHtmlStr, ' class="img-responsive img-shadow"', 4);
				console.log(innerParagraphHtmlStr);

				$(this).html('<a href="#' + counter + '" data-toggle="modal">' + innerParagraphHtmlStr + '</a>');
				// Append modal to 'modals' div within each post.
				$('#modals').append(

					'<div id="' + counter + '" class="modal fade" role="dialog">' +
					  '<div class="modal-dialog modal-lg">' +
						  '<!-- Modal content-->' +
					    '<div class="modal-content">' +
					      '<div class="modal-header">' +
					        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
					      '</div>' +
					      '<div class="modal-body">' +
					        innerParagraphHtmlStr +
					      '</div>' +
					      '<div class="modal-footer">' +
					        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
					      '</div>' +
					    '</div>' +
					  '</div>' +
					'</div>'

				);
				counter++;
			}
		});

	}
	modalize();

	// Helper function(s)

	/**
	 *	@name: insertString()
	 *	@author: Myles Enriquez
	 *	@date: 20160125
	 *	@description: Inserts a given string into another 'mainString'.
	 *
	 *	@param1: {String} mainString The main string that will be modified
	 *	@param2: {String} insertString The string that will be inserted
	 * 	@param3: {Int} position The position in mainString where insertString will be inserted
	 *	@return: {String} The new modified string
	 */
	function insertString(mainString, insertString, position) {
		return mainString.substring(0, position) + insertString + mainString.substr(position);
	}
});
