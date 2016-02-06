/**
 * @NAME: results.js
 * @DESCRIPTION: This script is used to retrieve our search results from our generated json file.
 */
$(function(Query) {

	var query = new Query();
	var site = location.protocol + "//" + window.location.host;

	console.log(site);

	query
	.setFromURL('query')
	.getJSON('/posts.json')
	.done(function(data) {
		// console.log("Posts from our json:");
		// console.log(data); // Log our data for debugging

		var searchIndex,
		results,
		$resultsCount = $('.search-results-count'),
		$results = $('.search-results'),
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
			$results.append('<p>Hmm...no results found. How about trying our <a href="' + site + '/how-to/">How-to</a>, <a href="' + site + '/strategies/">Strategies</a>, or <a href="' + site + '/troubleshooting/">Troubleshooting</a> categories instead?</p>');
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

				$results.append('<h1><a href="' + site + url + '">' + title + '</a></h1>');
				$results.append('<p>' + blurb + '</p>');
				$results.append('<hr />');
			});
		}
	});

}(Query));