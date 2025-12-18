# Copilot instructions — Personal-website

Purpose
- Help AI coding agents be productive in this small static website repository.

Big picture
- This repo is a simple static site: the site root is `index.html`. Static assets live in `images/` and `JS/`.
- No build tools, package.json, or server code were found. Treat this as a drop-in static site that can be served directly.

Key files & layout
- `index.html` — site entry (currently empty in this checkout; modify this to change the page).
- `JS/ani.js` — animation/behavior JS (place interactive logic here).
- `JS/stylr.css` — page styling (note: CSS is stored in `JS/` in this project).
- `images/` — static image assets used by the site.

Discoverable conventions
- Single-page static design: add markup to `index.html`, styles to `JS/stylr.css`, and behavior to `JS/ani.js`.
- Filenames and directories use simple lowercase names and are placed at repository root (no src/build split).
- There are no CI/test files; code changes should be validated manually in a browser.

Developer workflows (concrete commands)
- Quick local preview (Python HTTP server):
```
python -m http.server 8000
# then open http://localhost:8000 in a browser
```
- Or use VS Code Live Server extension to preview `index.html` with live reload.

Debugging and editing tips
- Use browser DevTools for layout/console errors — this is a static site with client-side JS only.
- If adding new assets, keep them under `images/` or `JS/` and update references in `index.html` accordingly.

Integration points & external deps
- No external package manager was detected. If you add libraries, prefer adding them via CDN links in `index.html` or add a `package.json` and document build steps.

Examples (how to modify)
- Add a script include in `index.html` to wire up behavior:
```
<script src="JS/ani.js"></script>
```
- Add styles by editing `JS/stylr.css` and linking it from `index.html`.

What I could not infer
- `index.html`, `JS/ani.js`, and `JS/stylr.css` are currently empty in this checkout — there may be omitted content or branches with the actual site. If those files should contain site content, provide a copy or point me to the branch that contains them.

When making changes
- Keep changes minimal and self-contained: update `index.html` and matching `JS/` files together.
- Prefer plain edits over introducing build tooling unless you explicitly want a modern toolchain (then document the desired toolchain and commands).

Next steps for an AI agent
- If asked to implement a feature, request the desired HTML structure or example content to avoid guessing page intent.
- If asked to add a dependency or build step, ask whether to stay CDN/static-only or introduce `npm`/`package.json`.

Feedback
- If any of these files are incomplete or there are hidden branches with content, tell me where the canonical site files live so I can update these instructions accordingly.
