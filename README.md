# Banner Kita — GitHub Pages Site

A minimal, framework-free website that deploys cleanly on GitHub Pages. Uses only relative paths so it works under `https://USERNAME.github.io/REPO/` without breaking.

## Quick Start (fresh repo)

1. Create a new repository on GitHub (public or private).
2. Download this folder as a ZIP and extract, or drag‑drop the files into your repo.
3. Commit and push.

## Enable GitHub Pages

- Go to **Settings → Pages**.
- **Source**: *Deploy from a branch*.
- **Branch**: `main`, and **Folder**: `/ (root)` (or `docs/` if you move files into a `docs` folder).
- Save. After a minute, your site will be live at the URL shown there.

> Tip: Keep all asset paths **relative** (e.g. `./assets/...`) to avoid 404s on project pages.

## Customise

- Replace placeholder images in `assets/images/` (keep filenames or update `<img src>`).
- Update the WhatsApp and Facebook links in `index.html` (search for `whatsappBtn` and `facebookBtn`).
- Edit the Price List directly on the site: click **Edit Prices**, change values, then **Save** (stored in your browser via localStorage).

## Common Crash/404 Fixes

- Ensure there is an `index.html` in the root (or in `docs/` if you chose that as Pages folder).
- Avoid absolute paths like `/assets/...`; use `./assets/...`.
- If using frameworks/build tools, ensure your output lands in the selected Pages folder.
- Add a `.nojekyll` file (already included) so GitHub doesn’t try to process your files.
- If you changed the default branch name, update Pages settings to match (e.g., `main`).
- Wait up to a couple of minutes after toggling Pages settings.

## Optional: Move to `docs/`

If you prefer, move all files into a `docs/` folder and set **Settings → Pages → Branch: main / Folder: /docs**.

## Local Overrides (advanced)

You can store your WhatsApp/Facebook links in your own browser without editing HTML:

```js
localStorage.setItem('bannerKitaLinksV1', JSON.stringify({
  whatsapp: 'https://wa.me/60123456789',
  facebook: 'https://facebook.com/yourpage'
}));
```

---

Built for reliability on GitHub Pages—no frameworks, no external CDNs, no headaches.
