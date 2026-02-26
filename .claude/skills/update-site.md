# Update Site

## When to Use
When series bible content, research, or reference docs have been updated and the GitHub Pages site needs to reflect those changes. Also use after any session where markdown docs were modified.

## Instructions

1. **Identify what changed** — check which markdown files in `docs/series-bible/`, `docs/research/`, and `docs/references/` have been modified since the last site update
2. **Read the latest markdown** from each changed source file
3. **Update the corresponding HTML page(s)** using the source mapping below
4. **Maintain the design system** — all HTML pages must use:
   - Dark theme background
   - Gold accent colors for headings, links, and highlights
   - Sidebar navigation consistent across all pages
   - Shared `style.css` and `script.js`
   - Responsive layout
5. **Convert markdown to HTML content** — render the markdown body into the page's content area while preserving the site chrome (nav, header, footer)
6. **Verify consistency** — ensure sidebar nav links work across all pages
7. **Commit and push** with message format: `site: update [page names] from series bible changes`

## Source Mapping

| HTML Page | Markdown Source(s) |
|---|---|
| `docs/index.html` | Landing page — pull logline and status from `docs/series-bible/00-overview.md` |
| `docs/overview.html` | `docs/series-bible/00-overview.md` |
| `docs/world.html` | `docs/series-bible/01-world.md` |
| `docs/characters.html` | `docs/series-bible/02-characters.md` |
| `docs/themes.html` | `docs/series-bible/03-themes.md` |
| `docs/seasons.html` | `docs/series-bible/04-season-arcs.md` |
| `docs/tone.html` | `docs/series-bible/05-tone-and-style.md` |
| `docs/pilot.html` | `docs/series-bible/06-pilot-outline.md` |
| `docs/research.html` | `docs/research/agencies/goodby-silverstein.md`, `docs/research/agencies/wieden-kennedy.md`, `docs/research/agencies/tbwa-chiat-day.md` |
| `docs/references.html` | `docs/references/comp-shows.md`, `docs/references/playlist.md` |
| `docs/planning.html` | `planning/open-questions.md`, `planning/next-steps.md` |
| `docs/series-bible.html` | Aggregated view — pull from all `docs/series-bible/` files |

## Design System Reference

- **Background**: Dark theme (#1a1a2e or similar dark navy/charcoal)
- **Accent color**: Gold (#d4a843 or similar warm gold) for headings, active nav items, links, and borders
- **Text**: Light gray or off-white (#e0e0e0) for body text
- **Sidebar**: Fixed left sidebar with navigation links to all pages; collapses on mobile
- **Typography**: Clean sans-serif, clear hierarchy (system font stack)
- **Section structure**: Each markdown `##` becomes an HTML section with an anchor ID for deep linking
- **Shared assets**: `docs/style.css`, `docs/script.js`
- **Responsive**: Content area must be readable on mobile

## Checklist Before Pushing

- [ ] All changed markdown content is reflected in HTML
- [ ] Sidebar nav is consistent across all pages
- [ ] No broken internal links
- [ ] Gold accent headings render correctly
- [ ] Page titles match section names
- [ ] Commit message is descriptive

## Model Usage
- Use **Haiku** for straightforward markdown-to-HTML conversion
- Use **Sonnet** for formatting complex content and ensuring visual consistency
- Use **Opus** only if restructuring the site layout or adding new pages
