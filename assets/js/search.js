/**
 * @NAME: search.js
 * @DESCRIPTION: This script is used to submit our search query to our Query object. This file along with
 * results.js, and set-query.js are used to give the site searching functionality.
 */
$(function(Query) {
	'use strict';

	// Create our Query object (set-query.js)
	var query = new Query();

	//
	$('.search').on('submit', function(e) {
		// stop the form from doing its default behavior
		e.preventDefault();

		// set the query, and go to the search page with our query URL
		query
		.set($('.search-box').val().trim())
		.goToLocation('/search');
	});

}(Query));
