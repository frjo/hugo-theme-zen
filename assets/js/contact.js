/**
 * @file
 * A JavaScript file for the contact form.
 */

(function ($) {

  'use strict';

  // Contact form.
  $('.contact-form').each(function (e) {
    var $contact_form = $(e);
    var $contact_button = $contact_form.find('.form-submit');
    var contact_action = '/php/contact.php';

    // Display the hidden form.
    $contact_form.removeClass('hidden');

    // Wait for a mouse to move, indicating they are human.
    $('body').on('mousemove', function () {
      // Unlock the form.
      $contact_form.attr('action', contact_action);
      $contact_button.first().removeAttribute('disabled');
    });

    // Wait for a touch move event, indicating that they are human.
    $('body').on('touchmove', function () {
      // Unlock the form.
      $contact_form.attr('action', contact_action);
      $contact_button.first().removeAttribute('disabled');
    });

    // A tab or enter key pressed can also indicate they are human.
    $('body').on('keydown', function (e) {
      if ((e.keyCode === 9) || (e.keyCode === 13)) {
        // Unlock the form.
        $contact_form.attr('action', contact_action);
        $contact_button.first().removeAttribute('disabled');
      }
    });

    // Mark the form as submitted.
    $contact_button.on('click', function () {
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

})(u);
