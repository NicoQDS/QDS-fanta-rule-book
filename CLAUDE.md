# Fanta Rule Book

## Rules

- `index.md` and the live website must always be kept in sync. Any
  content change (rule text, tables, results, revision history, etc.)
  made to one must be applied to the other in the same change.
  - `index.md` is the single plain-Markdown source of the whole
    rulebook (all content, in one file).
  - The live website (Bootstrap-based, unique `id` attributes on
    elements) is split across two HTML pages sharing one footer
    (copy-pasted into each file — there is no templating):
    - `index.html` — "Regolamento" (also the site's home/landing
      page). Storico revisioni, collapsed by default at the top of
      the page; girone doppio, impostazioni Mantra, rinvii partite,
      formazioni non schierate, Metodo Osnaghi. Navbar: site title +
      a trophy-icon button opening `scoreboard.html` + the hamburger
      toggler/menu with links to every section of this page.
    - `scoreboard.html` — "Albo risultati". Navbar: site title + a
      book-icon button opening `index.html` only — no hamburger
      toggler or menu.
  - The navbar is intentionally DIFFERENT per page (see above) — when
    editing it, do not force the two files to match. The footer must
    still stay identical on both.
