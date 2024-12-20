/**
 * @file
 * A JavaScript file for Katex auto renderer.
 */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '\\[', right: '\\]', display: true }, // block
        { left: '$$', right: '$$', display: true }, // block
        { left: '\\(', right: '\\)', display: false }, // inline
        { left: '$', right: '$', display: false }, // inline
      ],
      throwOnError: false,
    });
  });
})();
