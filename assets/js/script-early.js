/**
 * @file
 * A JavaScript file for the theme. Runs first, before other things have loaded.
 * Will be added inline for quick loading.
 */

(function () {
  // Add a js class to the html-tag when JavsScript is active.
  document.querySelector('html').classList.replace('nojs', 'js');
})();
