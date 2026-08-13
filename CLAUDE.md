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
    - `index.html` — "Albo risultati" (also the site's home page).
      Navbar: site title + a book-icon button opening `ruleset.htm`
      only — no hamburger toggler or menu.
    - `ruleset.htm` — "Regolamento" (storico revisioni, collapsed by
      default at the top of the page; girone doppio, impostazioni
      Mantra, rinvii partite, formazioni non schierate, Metodo
      Osnaghi). Navbar: site title + a trophy-icon button opening
      `index.html` + the hamburger toggler/menu with links to every
      section of this page.
  - The navbar is intentionally DIFFERENT per page (see above) — when
    editing it, do not force the two files to match. The footer must
    still stay identical on both.
