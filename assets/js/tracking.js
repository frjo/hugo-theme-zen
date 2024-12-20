/**
 * @file
 * A JavaScript file for analytic tracking.
 */

import * as params from '@params';

const cookiebanner = params.cookieConsent;
const cookieconsent = localStorage.getItem('cookieconsent');
const idSite = params.piwikSiteID;
const matomoTrackingApiUrl = 'https://' + params.piwikTrackerUrl + '/matomo.php';
const googleAnalytics = params.GoogleAnalytics;

if (idSite) {
  // biome-ignore lint: Google code.
  let _paq = (window._paq = window._paq || []);

  if (cookiebanner) {
    _paq.push(['requireConsent']);
  }
  _paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
  _paq.push(['setSiteId', idSite]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  if (cookiebanner && cookieconsent === 'accept') {
    _paq.push(['setConsentGiven']);
  }
}

if (googleAnalytics && cookiebanner && cookieconsent === 'decline') {
  window['ga-disable-' + googleAnalytics] = true;
}
