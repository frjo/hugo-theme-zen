/**
 * @file
 * A JavaScript file for matomo analytic tracking.
 */

var idSite = {{ .Site.Params.piwikSiteID }};
var matomoTrackingApiUrl = 'https://{{ .Site.Params.piwikTrackerUrl }}/matomo.php';

var _paq = window._paq || [];
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
