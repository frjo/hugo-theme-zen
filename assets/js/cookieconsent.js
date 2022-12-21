/* eslint-disable no-undef */
(function () {

  'use strict';

  const cookiebanner = document.querySelector('.cookieconsent');
  const cookieconsent = localStorage.getItem('cookieconsent');

  if (cookiebanner && !cookieconsent) {
    cookiebanner.classList.remove('hidden');
    cookiebanner.classList.add('js-cookieconsent-open');
  }

  const cookie_buttons = document.querySelectorAll('button[data-consent]');
  cookie_buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.getAttribute('data-consent') === 'true') {
        localStorage.setItem('cookieconsent', 'accept');
      }
      else {
        localStorage.setItem('cookieconsent', 'decline');
      }
      cookiebanner.classList.remove('js-cookieconsent-open');
      cookiebanner.classList.add('hidden');
    });
  });

})();
