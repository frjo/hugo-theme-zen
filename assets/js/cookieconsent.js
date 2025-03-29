/**
 * @file
 * A JavaScript file for cookie consent.
 */

(function () {
  const cookiebanner = document.querySelector('.cookieconsent');
  const cookieconsent = localStorage.getItem('cookieconsent');

  if (cookiebanner && !cookieconsent) {
    cookiebanner.hidden = false;
    cookiebanner.dataset.cookieconsentopen = true;
  }

  const cookie_buttons = document.querySelectorAll('button[data-consent]');
  cookie_buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.dataset.consent === 'true') {
        localStorage.setItem('cookieconsent', 'accept');
      } else {
        localStorage.setItem('cookieconsent', 'decline');
      }
      delete cookiebanner.dataset.cookieconsentopen;
      cookiebanner.hidden = true;
    });
  });

  const clear_buttons = document.querySelectorAll('.clearcookieconsent');
  clear_buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      if (cookiebanner && cookieconsent) {
        localStorage.removeItem('cookieconsent');
        cookiebanner.hidden = false;
        cookiebanner.dataset.cookieconsentopen = true;
      }
    });
  });
})();
