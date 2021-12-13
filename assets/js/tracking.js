/* eslint-disable no-undef */

/**
 * @file
 * A JavaScript file for analytic tracking.
 */

var cookiebanner = {{ .Site.Params.cookieConsent | default false }};
var cookieconsent = localStorage.getItem('cookieconsent');
var idSite = '{{ .Site.Params.piwikSiteID }}';
var matomoTrackingApiUrl = 'https://{{ .Site.Params.piwikTrackerUrl }}/matomo.php';
var googleAnalytics = '{{ .Site.GoogleAnalytics }}';

if (idSite) {
  var _paq = window._paq || [];
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
