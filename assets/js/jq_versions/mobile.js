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
      $('.mobile-nav__cover, .mobile-nav__toggle').click(function (e) {
        e.preventDefault();
        $('body').scrollTop(0).toggleClass('js-nav-open');
      });

      // Close the nav sheet after click (needed for anchor links).
      $('.mobile-nav__sheet').find('a').click(function () {
        $('body').removeClass('js-nav-open');
      });
    }
  }

})(jQuery);
