/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  $('html').addClass('js');

  // Activate the SlickNav menu for small screens.
  if (window.matchMedia) {
    var mq = window.matchMedia('(max-width: 666px)');
    if (mq.matches) {
      // Create the nav toggle button and the nav sheet.
      $('.page').after('<div class="js-nav-wrapper"><div class="js-nav-cover"></div><a href="#navigation" class="js-nav-toggle" aria-haspopup="true" role="button">Menu</a><div class="js-nav-sheet"></div></div>');

      // Populate the nav sheet.
      $('.main-menu').addClass('hidden').clone().removeClass('main-menu layout__navigation layout__full hidden hidden').addClass('js-main-menu').appendTo('.js-nav-sheet').find('.navbar').removeClass('navbar').addClass('js-navbar');
      $('.header__region').addClass('hidden').clone().removeClass('header__region region hidden').addClass('js-region').appendTo('.js-nav-sheet');

      // Toggle the nav sheet.
      $('.js-nav-cover, .js-nav-toggle').on('click toushstart', function (e) {
        e.preventDefault();
        $('.js-nav-wrapper').toggleClass('js-nav-open');
      });

    }
  }

})(jQuery);
