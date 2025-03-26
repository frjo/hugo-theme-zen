/**
 * @file
 * A JavaScript file for flexsearch.
 */

import * as params from '@params';

(function () {
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'tags', 'content', 'date'],
      store: ['title', 'summary', 'date', 'permalink'],
    },
    tokenize: 'forward',
  });

  function showResults(items) {
    const template = document.querySelector('template').content;
    const fragment = document.createDocumentFragment();

    const results = document.querySelector('[data-search-results]');
    results.textContent = '';

    for (const id in items) {
      const item = items[id];
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

  function doSearch() {
    const query = document.querySelector('[data-search-text]').value.trim();
    const results = index.search({
      query: query,
      enrich: true,
      limit: params.searchLimit,
    });
    const items = {};
    results.forEach(function (result) {
      result.result.forEach(function (r) {
        items[r.id] = r.doc;
      });
    });
    showResults(items);
  }

  function enableUI() {
    const searchform = document.querySelector('[data-search-form]');
    searchform.addEventListener('submit', function (e) {
      e.preventDefault();
      doSearch();
    });
    searchform.addEventListener('input', function () {
      doSearch();
    });
    document.querySelector('[data-search-loading]').classList.add('hidden');
    document.querySelector('[data-search-input]').classList.remove('hidden');
    document.querySelector('[data-search-loading]').focus();
  }

  function buildIndex() {
    const searchindex = params.basePath + 'searchindex.json';
    document.querySelector('[data-search-loading]').classList.remove('hidden');
    fetch(searchindex)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          index.add(item);
        });
      });
  }

  buildIndex();
  enableUI();
})();
