/**
 * @file
 * A JavaScript file for the theme.
 */

$(document).ready(function () {
  if (window.matchMedia && $.isFunction($.fn.slicknav)) {
    var mq = window.matchMedia("(max-width: 666px)");
    if (mq.matches) {
      $('.main-menu').hide().find('.navbar').filter(':first').slicknav();
    }
  }
});
