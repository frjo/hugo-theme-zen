/**
 * @file
 * A JavaScript file for the contact form.
 */

(function () {
  const form = document.querySelector('.contact-form');
  const button = form.querySelector('[type=submit]');
  const action = form.getAttribute('data-protect');

  const activateForm = function () {
    form.setAttribute('action', action);
    button.removeAttribute('disabled');
  };

  // Display the hidden form.
  form.classList.remove('hidden');

  // Wait for a mouse to move, indicating they are human.
  document.body.addEventListener('mousemove', activateForm, { once: true });
  // Wait for a touch move event, indicating that they are human.
  document.body.addEventListener('touchmove', activateForm, { once: true });
  // A tab or enter key pressed can also indicate they are human.
  document.body.addEventListener(
    'keydown',
    function (e) {
      if (e.key === 'Tab' || e.key === 'Enter') {
        activateForm();
      }
    },
    { once: true },
  );

  // Mark the form as submitted.
  button.addEventListener('click', () => form.classList.add('js-submitted'));

  // Display messages.
  if (location.search.substring(1) !== '') {
    switch (location.search.substring(1)) {
      case 'submitted':
        document.querySelector('[data-contact-submitted]').classList.remove('hidden');
        break;

      case 'error':
        document.querySelector('[data-contact-error]').classList.remove('hidden');
        break;
    }
  }
})();
