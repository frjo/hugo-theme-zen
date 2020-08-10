/**
 * @file
 * A JavaScript file for analytic tracking.
 */

var idSite = '{{ .Site.Params.piwikSiteID }}';
var matomoTrackingApiUrl = 'https://{{ .Site.Params.piwikTrackerUrl }}/matomo.php';

var _paq = window._paq || [];
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);

var googleAnalytics = '{{ .Site.GoogleAnalytics }}';

var _gaq = window._gaq || [];
_gaq.push(['_setAccount', googleAnalytics]);
_gaq.push(['_trackPageView']);
