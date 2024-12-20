/**
 * @file
 * A JavaScript file for responsive tables.
 */

(function () {
  const tables = document.querySelectorAll('.responsive-table');

  tables.forEach(function (table) {
    const headers = table.querySelectorAll('th');
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(function (row) {
      const cells = row.querySelectorAll('td');

      cells.forEach(function (cell, i) {
        cell.setAttribute('role', 'cell');
        if (headers[i].innerText) {
          cell.setAttribute('aria-label', headers[i].innerText);
        }
      });
    });
  });
})();
