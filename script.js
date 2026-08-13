/* =====================================================================
   script.js
   ---------------------------------------------------------------------
   This project keeps HTML, CSS and JS in separate files on purpose,
   which is why this file still exists — but there is intentionally no
   code in it right now.

   Previously (when this site used the Bulma CSS framework) we had to
   write our own click-handling JavaScript to open/close the mobile
   navigation menu. Now that the site uses Bootstrap, that is no
   longer necessary: Bootstrap ships its own JavaScript bundle
   (loaded in each HTML page as "bootstrap.bundle.min.js") which
   already knows how to open/close the menu on its own.

   It does this by reading two HTML attributes we put on the
   hamburger button in index.html:
     - data-bs-toggle="collapse"   → "this button toggles a collapsible element"
     - data-bs-target="#navbar-menu" → "the element to toggle has id=navbar-menu"

   Bootstrap's bundled script watches for clicks on any element with
   those attributes and handles the show/hide animation itself, so we
   don't have to write "addEventListener" + "classList.toggle" code
   like we used to.

   If this site ever needs custom behaviour again (for example: a
   "back to top" button, or highlighting the current section in the
   navbar while scrolling), that code would go here.
   ===================================================================== */

/* -----------------------------------------------------------------
   Palmarès table — click-to-sort headers (scoreboard.html only)
   -------------------------------------------------------------------
   Clicking "Lega unica", "A", "B" or "Coppa" sorts the table by that
   column descending, using "Totale" descending as a tie-breaker.
   Clicking "Totale" restores the page's original (default) row
   order, which is already sorted Totale > Lega unica > A > B > Coppa,
   all descending.

   Every sort always starts over from the ORIGINAL row order captured
   on page load (not from whatever order is currently on screen), so
   clicking a header gives the same result no matter what was clicked
   before it.

   Each number cell carries a "data-value" attribute (see scoreboard.html)
   so we can read its value directly, since zero counts are rendered
   as empty cells with no visible "0" text to parse.
   ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("palmares-table");
  if (!table) return;

  var tbody = table.querySelector("tbody");
  var defaultRows = Array.prototype.slice.call(tbody.querySelectorAll("tr"));

  var TOTALE_CELL_INDEX = 1;
  var sortableColumns = {
    "palmares-th-lega-unica": 2,
    "palmares-th-a": 3,
    "palmares-th-b": 4,
    "palmares-th-coppa": 5,
  };

  function cellValue(row, cellIndex) {
    return parseInt(row.children[cellIndex].dataset.value, 10) || 0;
  }

  function renderRows(rows) {
    rows.forEach(function (row) {
      tbody.appendChild(row);
    });
  }

  document
    .getElementById("palmares-th-totale")
    .addEventListener("click", function () {
      renderRows(defaultRows);
    });

  Object.keys(sortableColumns).forEach(function (headerId) {
    var cellIndex = sortableColumns[headerId];
    document.getElementById(headerId).addEventListener("click", function () {
      var sortedRows = defaultRows.slice().sort(function (rowA, rowB) {
        var columnDiff = cellValue(rowB, cellIndex) - cellValue(rowA, cellIndex);
        if (columnDiff !== 0) return columnDiff;
        return cellValue(rowB, TOTALE_CELL_INDEX) - cellValue(rowA, TOTALE_CELL_INDEX);
      });
      renderRows(sortedRows);
    });
  });
});

/* -----------------------------------------------------------------
   Hamburger menu — close on link click (index.html only)
   -------------------------------------------------------------------
   Putting "data-bs-toggle=collapse" directly on the menu links would
   also close the menu, but Bootstrap's collapse data-api always calls
   preventDefault() on <a> triggers, which would block the browser
   from actually jumping to the link's "href" target. So instead we
   let the links navigate normally and just hide the collapse
   ourselves afterwards.
   ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("navbar-menu");
  var links = document.getElementById("navbar-menu-links");
  if (!menu || !links) return;

  links.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var collapse = bootstrap.Collapse.getOrCreateInstance(menu);
      collapse.hide();
    });
  });
});
