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
   (loaded in index.html as "bootstrap.bundle.min.js") which already
   knows how to open/close the menu on its own.

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
