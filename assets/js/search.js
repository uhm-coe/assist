$(function(Query) {
	'use strict';
	console.log("From search.js");

	var query = new Query();

	$('.search').on('submit', function(e) {
		// stop the form from doing its default behavior
		e.preventDefault();

		// set the query, and go to the search page with our query URL
		query
		.set($('.search-box').val().trim())
		.goToLocation('/search');
	});


}(Query));