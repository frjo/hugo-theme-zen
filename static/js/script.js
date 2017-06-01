/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  $('html').addClass('js');

  // Activate the SlickNav menu for small screens.
  if (window.matchMedia && $.isFunction($.fn.slicknav)) {
    var mq = window.matchMedia('(max-width: 666px)');
    if (mq.matches) {
      $('.main-menu').hide().find('.navbar').filter(':first').slicknav();
    }
  }

})(jQuery);
