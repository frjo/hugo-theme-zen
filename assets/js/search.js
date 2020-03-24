/**
 * @file
 * A JavaScript file for flexsearch.
 */

(function () {

  'use strict';

  const flexSearch = new FlexSearch({
    doc: {
      id: 'id',
      field: ['title','tags','content','date'],
      store: ['title','summary','date','permalink']
    }
  });

  function showResults(items) {
    const template = document.querySelector('template').content;
    const fragment = document.createDocumentFragment();

    const results = document.querySelector('.search-results');
    results.textContent = '';

    for (const item of items) {
      const result = template.cloneNode(true);
      const a = result.querySelector('a');
      const time = result.querySelector('time');
      const content = result.querySelector('.content');
      a.innerHTML = item.title;
      a.href = item.permalink;
      time.innerText = item.date;
      content.innerHTML = item.summary;
      fragment.appendChild(result);
    }
    results.appendChild(fragment);
  }

  function doSearch () {
    const query = document.querySelector('.search-text').value.trim();
    const results = flexSearch.search({
      query: query,
      limit: {{ .Site.Params.searchLimit | default 20 }}
    });
    showResults(results);
  }

  function enableUI () {
    const searchform = document.querySelector('.search-form');
    searchform.addEventListener('submit', function (e) {
      e.preventDefault();
      doSearch();
    })
    searchform.addEventListener('keyup', function () {
      doSearch();
    })
    document.querySelector('.search-loading').classList.add('hidden');
    document.querySelector('.search-input').classList.remove('hidden');
    document.querySelector('.search-text').focus();
  }

  function buildIndex () {
    document.querySelector('.search-loading').classList.remove('hidden');
    fetch('/searchindex.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        flexSearch.add(data);
      });
  }

  buildIndex();
  enableUI();
})();
