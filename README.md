#Flow

## Posts
#### Where are posts located?
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve` in your terminal, which launches a web server (localhost) and auto-regenerates your site when a file is updated.

#### How to add new posts?
To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` (here '.ext' should be either '.md' or '.markdown') and includes the necessary front matter. An example would be `2015-01-06-awesome-post-name.markdown`.

#### Markdown and posts
All posts are written using markdown. Hence, the reason why post files have an extension of `.markdown` or `.md`. If you are not familiar with markdown, be sure to read up on the markdown basics from [github](https://help.github.com/articles/markdown-basics/).

#### Front-matter and posts
Each post requires the following front matter:
```
===
layout: post
title:  "Sample Title"
date:   2015-11-24 13:46:32
category: category1
tags: tag1, tag2, tag3
author: firstName lastName
materials: computer, internet connection
blurb: "This is a basic introduction on how to write a post in jekyll."
published: true
===
```

- **layout:** the type of layout that this post will be using.
  - Use **'post'** as default.
- **title:** the title given to this post
  - Try to keep the title clean and short.
- **date:** the date that this post was written.
  - If you're updating the post please make sure to also update the date.
- **category:** the category that this post belongs two.
  - **NOTE:** There can only be 1 category assigned to a post.
- **tags:** the tags assigned to this post.
  - There can be multiple tags assigned to a post.
- **author:** the author of this post.
  - If you're updating the post please make sure to also update the author.
- **materials:** the materials needed to work through this post.
- **blurb:** 1 - 3 sentences describing what this post is about.
- **published:** set this to either
  - **true** if you want the post to be published
  - **false** if you don't want it to be published. (Not being published means the post wont display in the posts list)

## Further Reading
#### Still confused?
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/