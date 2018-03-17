/**
 * @file
 * A JavaScript file for the contact form.
 */

(function ($) {

  'use strict';

  // Contact form.
  $('.contact-form').each(function () {
    var $contact_form = $(this);
    var $contact_button = $contact_form.find('.form-submit');
    var contact_action = '/php/contact.php';

    // Display the hidden form.
    $contact_form.removeClass('hidden');
    // Remove the "no javascript" messages
    $('.contact-no-js').detach();

    // Wait for a mouse to move, indicating they are human.
    $('body').mousemove(function () {
      // Unlock the form.
      $contact_form.attr('action', contact_action);
      $contact_button.attr('disabled', false);
    });

    // A tab or enter key pressed can also indicate they are human.
    $('body').keydown(function (e) {
      if ((e.keyCode === 9) || (e.keyCode === 13)) {
        // Unlock the form.
        $contact_form.attr('action', contact_action);
        $contact_button.attr('disabled', false);
      }
    });

    // Mark the form as submitted.
    $contact_button.on('click touchstart MSPointerDown', function () {
      $contact_form.addClass('js-submitted');
    });

    // Display messages.
    if (location.search.substring(1) !== '') {
      switch (location.search.substring(1)) {
        case 'submitted':
          $('.contact-submitted').removeClass('hidden');
          break;

        case 'error':
          $('.contact-error').removeClass('hidden');
          break;
      }
    }
  });

})(jQuery);
