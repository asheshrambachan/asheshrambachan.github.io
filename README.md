# Ashesh Rambachan’s academic website

The site uses the approved **Quiet** layout and **teal and copper** palette. The homepage introduction was approved on October 9, 2026. The research list is curated from the CV with Ashesh's approval.

## Edit the site

- `content/profile.json`: name, appointment, institution, approved introduction, photo, CV, and Google Scholar links.
- `content/research.json`: working papers, work in progress, and publications. Publications are grouped as Journals, Conference Proceedings, and Other Publications. AEA Papers and Proceedings and book chapters are in Other Publications; Conference Proceedings contains refereed CS proceedings.
- `assets/css/site.css`: shared layout and palette.
- `assets/files/asheshr_cv.pdf`: current public CV. The editable Word source stays in Dropbox.
- `images/ashesh-rambachan.jpg`: current professional photo.

Research entries preserve approved titles, coauthors, and publication status. Website journal citations show the journal name and any forthcoming status; the CV retains full bibliographic details. Work in Progress intentionally includes only “Machine Learning as a Tool for Theory Induction” and “From Next-Token Prediction to Automata Induction.” Do not restore other CV entries automatically. Paper titles are plain text, with draft, publisher, and software links below each entry. Do not invent a paper link when no public manuscript is available. CV changes require Ashesh’s approval.

## Build and preview

Node.js 18 or later is sufficient. There are no npm dependencies and no installation step.

```sh
npm run build
npm run check
npm run preview
```

The preview server prints its local URL (default `http://127.0.0.1:8768`). It serves only website output and public assets, not the source data or Git files. Stop it with Ctrl-C.

The builder produces ordinary HTML with no browser JavaScript. Generated HTML is checked in so GitHub Pages can serve the repository root. Run the build after editing content or CSS and commit the resulting HTML together with the source. Stylesheet URLs include a content hash so browsers load revised styles after an update. `npm run check` detects stale output, duplicate paper titles, non-HTTPS research links, and missing local link targets.

## Publishing

The repository remains compatible with the existing GitHub Pages branch deployment. `_config.yml` excludes source tools and the unused legacy theme from the Pages output. No GitHub settings need to change. Pushing the approved revision to the configured Pages source branch publishes it; local previews do not.

The old Jekyll theme files are retained but no longer used. Existing files in `assets/files/` are preserved so old paper and teaching links continue to work. `/about/`, `/about.html`, `/research/`, `/cv/`, and `/resume/` have compatibility redirects. New primary routes are `/`, `/working-papers/`, and `/publications/`.
