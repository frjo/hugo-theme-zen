/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  $('html').removeClass('nojs').addClass('js');

  // Activate the mobil menu for small screens.
  if (window.matchMedia && $('.mobile-nav-wrapper').length) {
    var mq = window.matchMedia('(max-width: 666px)');
    if (mq.matches) {
      // Show mobile menu.
      $('.mobile-nav-wrapper').removeClass('hidden');

      // Populate the mobile nav sheet.
      $('.header__region').filter(':not(:empty)').removeClass('header__region region hidden').addClass('js-region').appendTo('.mobile-nav-sheet');
      $('.main-menu').addClass('hidden').clone().removeClass('main-menu layout__navigation hidden').addClass('js-main-menu').appendTo('.mobile-nav-sheet').find('.navbar').removeClass('navbar').addClass('js-navbar');

      // Toggle the mobile nav sheet.
      $('.mobile-nav-cover, .mobile-nav-toggle').on('click toushstart', function (e) {
        e.preventDefault();
        $('body').scrollTop(0).toggleClass('js-nav-open');
      });

    }
  }

  // Display CSS grid layout warning to old browsers.
  // if (!window.CSS || !window.CSS.supports || !window.CSS.supports('display', 'grid')) {
  //   $('.header').after('<div class="layout__grid-notice" role="complementary">Your browsers does not support modern grid layout so this page will not look or behave as it should. Resent versions of Chrome, Firefox and Safari all works so please update. Support is coming in Microsoft Edge as well, until then use another browser. <a href="https://www.whatbrowser.org/">What Browser?</a></div>');
  // }

})(jQuery);
