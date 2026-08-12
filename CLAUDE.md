# Fanta Rule Book

## Rules

- `index.md` and the live website must always be kept in sync. Any
  content change (rule text, tables, results, revision history, etc.)
  made to one must be applied to the other in the same change.
  - `index.md` is the single plain-Markdown source of the whole
    rulebook (all content, in one file).
  - The live website (Bootstrap-based, unique `id` attributes on
    elements) is split across three HTML pages sharing one navbar and
    footer (copy-pasted into each file — there is no templating):
    - `index.html` — "Albo risultati" (also the site's home page)
    - `ruleset.htm` — "Regolamento" (girone doppio, impostazioni
      Mantra, rinvii partite, formazioni non schierate, Metodo
      Osnaghi)
    - `revision.html` — "Storico revisioni"
  - When editing the navbar or footer, apply the same change to all
    three HTML files — they must stay identical.
