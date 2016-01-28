// Documentation: http://benhowdle.im/creating-a-dynamic-search-page-for-your-jekyll-blog.html

// TODO: Move to autocomplete approach: http://danreev.es/posts/jekyll-search-with-typeahead/

!(function() {

	var parseQueryFromURL = function() {

		var searchQuery = window.location.search;
		if (!searchQuery) {
			return null;
		}

		var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
		while (match = regex.exec(searchQuery)) {
			params[match[1]] = match[2];
		}

		if (!params.hasOwnProperty("query")) {
			return null;
		}

		return decodeURIComponent(params.query);

	};

	var scanPosts = function(posts, properties, query) {

		var results = [];
		posts.forEach(function(post) {
			var textToScan = "",
				regex = new RegExp(query, "ig");

			properties.forEach(function(property) {
				if (post.hasOwnProperty(property)) {
					textToScan += post[property];
				}
			});

			if (regex.test(textToScan)) {
				results.push(post);
			}
		});

		return results;

	};

	var outputResults = function(results, el) {

		var frag = document.createDocumentFragment();
		results.forEach(function(result) {

			var div = document.createElement("div");
			div.className = "search-result";

			var title = document.createElement("h2");
			var link = document.createElement("a");
            var excerpt = document.createElement("p");

			link.href = result.link;
			link.innerHTML = result.title;
            excerpt.innerHTML = result.content;
			title.appendChild(link);

			div.appendChild(title);
            div.appendChild(excerpt);

			frag.appendChild(div);

		});

		el.appendChild(frag);

	};

	var Search = function(options) {

		options = options || {};

		if (!options.selector) {
			throw new Error("We need a selector to find");
		}

		this.el = document.querySelector(options.selector);
		if (!this.el) {
			throw new Error("We need a HTML element to output to");
		}

		this.posts = JEKYLL_POSTS;
		if (!this.posts) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		var defaultMessage = "No results found";
		this.noResultsMessage = options.noResultsMessage || defaultMessage;

		var defaultProperties = ["title"];
		this.properties = options.properties || defaultProperties;

		this.query = parseQueryFromURL();
		if (!this.query) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		this.results = scanPosts(this.posts, this.properties, this.query);
		if (!this.results.length) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		outputResults(this.results, this.el);

	};

	window.jekyllSearch = Search;

})();
