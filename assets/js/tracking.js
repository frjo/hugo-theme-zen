/* eslint-disable no-undef */

/**
 * @file
 * A JavaScript file for analytic tracking.
 */

var cookieConsent = {{ .Site.Params.cookieConsent | default false }};

var idSite = '{{ .Site.Params.piwikSiteID }}';
var matomoTrackingApiUrl = 'https://{{ .Site.Params.piwikTrackerUrl }}/matomo.php';

var _paq = window._paq || [];
if (cookieConsent) {
  _paq.push(['requireConsent']);
}
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
if (typeof Cookies !== 'undefined' && Cookies.get('cookieconsent') === 'accept') {
  _paq.push(['setConsentGiven']);
}

var googleAnalytics = '{{ .Site.GoogleAnalytics }}';
if (cookieConsent) {
  if (typeof Cookies === 'undefined' || Cookies.get('cookieconsent') !== 'accept') {
    window['ga-disable-' + googleAnalytics] = true;
  }
}
