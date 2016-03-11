// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var sass = require('gulp-sass');
var optipng = require('gulp-optipng');
var options = ['-o2'];


/**
 *	TASK: optipng
 *	USES: gulp-optipng
 *  DESCRIPTION: Optimize all .png files
 */
gulp.task('optipng', function() {
	return gulp.src('img/logos/*.png')
		.pipe(optipng(options))
		.pipe(gulp.dest('img/optimized/'));
});


/**
 *	TASK: scripts
 *	USES: gulp-concat, gulp-rename, gulp-uglify
 *  DESCRIPTION: Concats all js files, compresses, and renames with .min
 */
gulp.task('scripts', function(){
	return gulp.src([
		'assets/js/jquery.min.js',
		'assets/js/bootstrap.min.js',
		'assets/js/lunr.min.js',
		'assets/js/set-query.js',
		'assets/js/main.js',
		'assets/js/modalizer.js',
		'assets/js/search.js',
		'assets/js/results.js'
		])
		.pipe(concat('all.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});


/**
 *	TASK: sass
 *	USES: gulp-concat, gulp-sass, gulp-rename
 *  DESCRIPTION: Concats all scss files, compresses, and renames with .min
 */
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'compressed'
};
gulp.task('sass', function() {
	return gulp.src([
		'assets/scss/typography.scss',
		'assets/scss/variables.scss',
		'assets/scss/mixins.scss',
		'assets/scss/bootstrap-overrides.scss',
		'assets/scss/base.scss',
		'assets/scss/layouts.scss',
		'assets/scss/includes.scss'
		])
		.pipe(concat('all.scss'))
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/css'))
});


/**
 *	TASK: stripdebug
 *	USES: gulp-strip-debug
 *  DESCRIPTION: Removes all console.log and debugging messages from js files
 */
gulp.task('stripdebug', function() {
	return gulp.src('assets/js/*.js')
	.pipe(stripDebug())
	.pipe(gulp.dest('dist/js/'));
});

// Default task
gulp.task('default', ['scripts', 'sass']);
