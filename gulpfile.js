'use strict';

var options = {};

// #############################
// Edit these paths and options.
// #############################

// The root paths are used to construct all the other paths in this
// configuration.
options.rootPath = {
  projectAssets : '../../assets/',
  themeAssets   : __dirname + '/assets/'
};

options.path = {
  sass : [
    options.rootPath.themeAssets + 'sass/**/*.scss',
    options.rootPath.projectAssets + 'sass/**/*.scss'
  ],
  js : [
    options.rootPath.themeAssets + 'js/**/*.js',
    options.rootPath.projectAssets + 'js/**/*.js'
  ]
};

// If your files are on a network share, you may want to turn on polling for
// Gulp watch. Since polling is less efficient, we disable polling by default.
options.gulpWatchOptions = {interval: 600};
// options.gulpWatchOptions = {interval: 1000, mode: 'poll'};

// Load Gulp and tools we will use.
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// Lint JavaScript.
gulp.task('lint:js', function lint () {
  return gulp.src(options.path.js)
    .pipe($.eslint())
    .pipe($.eslint.format());
});

// Lint JavaScript and throw an error for a CI to catch.
gulp.task('lint:js-with-fail', function lint () {
  return gulp.src(options.path.js)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

// Lint Sass.
gulp.task('lint:sass', function lint () {
  return gulp.src(options.path.sass)
    .pipe($.sassLint())
    .pipe($.sassLint.format());
});

// Lint Sass and throw an error for a CI to catch.
gulp.task('lint:sass-with-fail', function lint () {
  return gulp.src(options.path.sass)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());
});

// Lint Sass and JavaScript.
gulp.task('lint', gulp.parallel('lint:sass', 'lint:js'));

// Watch for changes and rebuild.
gulp.task('watch:lint:sass', gulp.series('lint:sass', function watch () {
  return gulp.watch(options.path.sass, options.gulpWatchOptions, gulp.series('lint:sass'));
}));

gulp.task('watch:lint:js', gulp.series('lint:js', function watch () {
  return gulp.watch(options.path.js, options.gulpWatchOptions, gulp.series('lint:js'));
}));

gulp.task('watch:lint', gulp.parallel('watch:lint:sass', 'watch:lint:js'));

gulp.task('watch', gulp.series('watch:lint'));

// The default task.
gulp.task('default', gulp.series('lint'));
