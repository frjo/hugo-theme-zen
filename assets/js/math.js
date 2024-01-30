/**
 * @file
 * A JavaScript file for Katex auto renderer.
 */

(function () {

  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // eslint-disable-next-line no-undef
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\[', right: '\\]', display: true},   // block
        {left: '$$', right: '$$', display: true},     // block
        {left: '\\(', right: '\\)', display: false},  // inline
        {left: '$', right: '$', display: false}       // inline
      ],
      throwOnError: false
    });
  });

})();
