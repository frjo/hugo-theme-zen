/**
 * @file
 * A JavaScript file for the mobile menu.
 */

(function () {

  'use strict';

  const nav = document.querySelector('.mobile-nav');
  const sheet = document.querySelector('.mobile-nav__sheet');
  const toggle = document.querySelector('.mobile-nav__toggle');

  function navopen() {
    nav.classList.add('js-nav-open');
    sheet.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function navclose() {
    nav.classList.remove('js-nav-open');
    sheet.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  }

  // Toggle the mobile nav sheet.
  const toggles = document.querySelectorAll('.mobile-nav__cover, .mobile-nav__toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      if (nav.classList.contains('js-nav-open')) {
        navclose();
      }
      else {
        navopen();
      }
    });
  });

  // Close the nav sheet after click (needed for anchor links).
  const links = document.querySelectorAll('.mobile-nav__sheet a');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      navclose();
    });
  });

  // Move focus back to button efter user tab out of last link.
  const lastlink = [].slice.call(links).pop();
  lastlink.addEventListener('blur', () => toggle.focus());

})();
