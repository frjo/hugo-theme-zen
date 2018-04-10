'use strict';

var importOnce = require('node-sass-import-once'),
  path = require('path');

var options = {};

// #############################
// Edit these paths and options.
// #############################

// The root paths are used to construct all the other paths in this
// configuration. The "project" root path is where this gulpfile.js is located.
// While Zen distributes this in the theme root folder, you can also put this
// (and the package.json) in your project's root folder and edit the paths
// accordingly.
options.rootPath = {
  project     : __dirname + '/',
  theme       : __dirname + '/'
};

options.theme = {
  root  : options.rootPath.theme,
  css   : options.rootPath.theme + 'static/css/',
  sass  : options.rootPath.theme + 'sass/',
  js    : options.rootPath.theme + 'static/js/'
};

// Define the node-sass configuration. The includePaths is critical!
options.sass = {
  importer: importOnce,
  includePaths: [
    options.theme.sass,
    options.rootPath.project + 'node_modules/breakpoint-sass/stylesheets',
    options.rootPath.project + 'node_modules/chroma-sass/sass',
    options.rootPath.project + 'node_modules/typey/stylesheets'
  ],
  outputStyle: 'expanded'
};

// Define the paths to the JS files to lint.
options.eslint = {
  files  : [
    options.theme.js + '**/*.js',
    '!' + options.theme.js + '**/*.min.js'
  ]
};

// If your files are on a network share, you may want to turn on polling for
// Gulp watch. Since polling is less efficient, we disable polling by default.
options.gulpWatchOptions = {interval: 600};
// options.gulpWatchOptions = {interval: 1000, mode: 'poll'};


// ################################
// Load Gulp and tools we will use.
// ################################
var gulp      = require('gulp'),
  $           = require('gulp-load-plugins')(),
  del         = require('del'),
  // gulp-load-plugins will report "undefined" error unless you load gulp-sass manually.
  sass        = require('gulp-sass'),
  kss         = require('kss'),
  cleanCSS    = require('gulp-clean-css');

// The default task.
gulp.task('default', ['build']);

// #################
// Build everything.
// #################
gulp.task('build', ['styles:production', 'lint']);

// ##########
// Build CSS.
// ##########
var sassFiles = [
  options.theme.sass + '**/*.scss',
  // Do not open Sass partials as they will be included as needed.
  '!' + options.theme.sass + '**/_*.scss'
];

gulp.task('styles', ['clean:css'], function() {
  return gulp.src(sassFiles)
    .pipe($.sourcemaps.init())
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe($.size({showFiles: true}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(options.theme.css))
});

gulp.task('styles:production', ['clean:css'], function() {
  return gulp.src(sassFiles)
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe($.size({showFiles: true}))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(gulp.dest(options.theme.css));
});

// #########################
// Lint Sass and JavaScript.
// #########################
gulp.task('lint', ['lint:sass', 'lint:js']);

// Lint JavaScript.
gulp.task('lint:js', function() {
  return gulp.src(options.eslint.files)
    .pipe($.eslint())
    .pipe($.eslint.format());
});

// Lint JavaScript and throw an error for a CI to catch.
gulp.task('lint:js-with-fail', function() {
  return gulp.src(options.eslint.files)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

// Lint Sass.
gulp.task('lint:sass', function() {
  return gulp.src(options.theme.sass + '**/*.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format());
});

// Lint Sass and throw an error for a CI to catch.
gulp.task('lint:sass-with-fail', function() {
  return gulp.src(options.theme.sass + '**/*.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());
});

// ##############################
// Watch for changes and rebuild.
// ##############################
gulp.task('watch', ['watch:css', 'watch:lint', 'watch:js']);

gulp.task('watch:css', ['styles'], function() {
  return gulp.watch(options.theme.sass + '**/*.scss', options.gulpWatchOptions, ['styles']);
});

gulp.task('watch:lint', ['lint:sass'], function() {
  return gulp.watch(options.theme.sass + '**/*.scss', options.gulpWatchOptions, ['lint:sass']);
});

gulp.task('watch:js', ['lint:js'], function() {
  return gulp.watch(options.eslint.files, options.gulpWatchOptions, ['lint:js']);
});

// ######################
// Clean all directories.
// ######################
gulp.task('clean', ['clean:css']);

// Clean CSS files.
gulp.task('clean:css', function() {
  return del([
      options.theme.css + '**/*.css',
      options.theme.css + '**/*.map'
    ], {force: true});
});


// Resources used to create this gulpfile.js:
// - https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
// - https://github.com/dlmanning/gulp-sass/blob/master/README.md
