/**
 * @file
 * A JavaScript file for the theme. Runs first, before other things have loaded.
 */

(function () {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  document.querySelector('html').classList.replace('nojs', 'js');

})();
