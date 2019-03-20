/**
 * @file
 * A JavaScript file for the mobile menu.
 */

(function ($) {

  'use strict';

  // Activate the mobil menu for small screens.
  if (window.matchMedia && $('.mobile-nav').length) {
    var mq = window.matchMedia('(max-width: 999px)');
    if (mq.matches) {
      // Toggle the mobile nav sheet.
      $('.mobile-nav__cover, .mobile-nav__toggle').handle('click', function () {
        $('body').scroll().toggleClass('js-nav-open');
      });

      // Close the nav sheet after click (needed for anchor links).
      $('.mobile-nav__sheet').find('a').on('click', function () {
        $('body').removeClass('js-nav-open');
      });
    }
  }

})(u);

