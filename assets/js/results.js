/**
 * @NAME: results.js
 * @DESCRIPTION: This script is used to retrieve our search results from our generated json file. This file along with
 * search.js, and set-query.js are used to give the site searching functionality.
 */
$(function(Query) {

	var query = new Query();
	var site = location.protocol + "//" + window.location.host;

	console.log(site);

	query
	.setFromURL('query')
	.getJSON('/posts.json')
	.done(function(data) {

		var searchIndex,
		results,
		$resultsCount = $('.search-results-count'),
		$results = $('.search-results'), // Div class where results will appear (in search.html)
		totalScore = 0,
		percentOfTotal;

		searchIndex = lunr(function() {
			this.field('title');
			this.field('blurb');
			this.field('category');
			this.field('content');
			this.ref('url');
			this.field('date');
		});

		// Add each item from posts.json to the index
		$.each(data, function(i, item){
			searchIndex.add(item);
		});

		// Search for the query and store the results as an array
		results = searchIndex.search(query.get());
		// console.log("Query results:");
		// console.log(results);

		// Add the fields of each post into each result (not standard in lunr.js)
		for(var result in results) {
			results[result].title = data.filter(function(post){
				return post.url === results[result].ref;
			})[0].title;

			results[result].category = data.filter(function(post){
				return post.url === results[result].ref;
			})[0].category;

			results[result].date = data.filter(function(post){
				return post.url === results[result].ref;
			})[0].date;

			results[result].blurb = data.filter(function(post){
				return post.url === results[result].ref;
			})[0].blurb;
		}

		// Show how many results there were, in the DOM
		$resultsCount.append( results.length + (results.length === 1 ? ' result' : ' results') + ' for "' + query.get() + '"');

		if (results.length == 0) {
			// TODO: Will need to set this relative to what is availabe (ex. categories.)
			$results.append('<div class="jumbotron"><p>Hmm...no results found. How about searching through our <a class="how-to-link" href="' + site + '/how-to/">How-to</a> or <a class="strategies-link" href="' + site + '/strategies/">Strategies</a> categories instead?</p></div>');
		}
		else {
			// Get the total score of all items, so that we can divide each result into it, giving us a percentage.
			$.each(results, function(i, result){
				totalScore += result.score;
			});

			// Append each result link, with a border that corresponds to a color with a strength equal to its percentage of the total score
			$.each(results, function(i, result){
				percentOfTotal = result.score/totalScore;

				var title = result.title,
				blurb = result.blurb,
				category = result.category,
				url = result.ref,
				date = result.date;

				if (category === "How-to") {
					$results.append('<div class="post-block"><div class="row"><div class="col-xs-12"><h2><a class="post-link" href="' + url + '">' + title + '</a></h2></div><div class="col-xs-12"><p class="post-blurb">' + blurb + '</p></div></div><div class="row post-details how-to"><div class="col-xs-12 col-md-5"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span><a href="' + site + "/" + category.toLowerCase() + "/" + '" title="View all posts published in ' + category + '">' + category + '</a></div></div></div>');
				}
				else if (category === 'Strategies') {
					$results.append('<div class="post-block"><div class="row"><div class="col-xs-12"><h2><a class="post-link" href="' + url + '">' + title + '</a></h2></div><div class="col-xs-12"><p class="post-blurb">' + blurb + '</p></div></div><div class="row post-details strategies"><div class="col-xs-12 col-md-5"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span><a href="' + site + "/" + category + '" title="View all posts published in ' + category + '">' + category + '</a></div></div></div>');
				}
				else {
					$results.append('<div class="post-block"><div class="row"><div class="col-xs-12"><h2><a class="post-link" href="' + url + '">' + title + '</a></h2></div><div class="col-xs-12"><p class="post-blurb">' + blurb + '</p></div></div><div class="row post-details troubleshooting"><div class="col-xs-12 col-md-5"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span><a href="' + site + "/" + category + '" title="View all posts published in ' + category + '">' + category + '</a></div></div></div>');
				}
			});
		}
	});

}(Query));