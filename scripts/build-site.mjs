import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const profile = JSON.parse(await readFile(resolve(root, 'content/profile.json'), 'utf8'));
const research = JSON.parse(await readFile(resolve(root, 'content/research.json'), 'utf8'));
const check = process.argv.includes('--check');
const styleVersion = createHash('sha256').update(await readFile(resolve(root, 'assets/css/site.css'))).digest('hex').slice(0, 12);
const escape = (value) => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const navItems = [['Home', '/'], ['Working Papers', '/working-papers/'], ['Publications', '/publications/'], ['CV', profile.cv]];
const metaDescription = profile.description.replace(/\s+/g, ' ').trim();

function document(title, path, body, extraHead = '') {
  const pageTitle = title === 'Home' ? profile.name : `${title} | ${profile.name}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(pageTitle)}</title>
  <meta name="description" content="${escape(metaDescription)}">
  <meta name="theme-color" content="#f6f2e9">
  <link rel="canonical" href="${escape(profile.url + path)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(pageTitle)}">
  <meta property="og:description" content="${escape(metaDescription)}">
  <meta property="og:url" content="${escape(profile.url + path)}">
  <meta property="og:image" content="${escape(profile.url + profile.photo)}">
  <meta property="og:image:alt" content="${escape(profile.name)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&amp;family=Source+Sans+3:ital,wght@0,400;0,500;1,400&amp;display=swap">
  <link rel="stylesheet" href="/assets/css/site.css?v=${styleVersion}">
  ${extraHead}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="site-shell">
    <header class="site-header">
      <a class="site-name" href="/">${escape(profile.name)}</a>
      <nav aria-label="Main navigation">
        ${navItems.map(([label, url]) => `<a href="${escape(url)}"${url === path ? ' aria-current="page"' : ''}>${escape(label)}</a>`).join('\n        ')}
      </nav>
    </header>
    <main id="main" tabindex="-1">${body}
    </main>
  </div>
</body>
</html>
`.replace(/[ \t]+$/gm, '');
}

function paper(entry, working = false, heading = 'h3') {
  const title = escape(entry.title);
  return `      <li class="paper">
        <${heading}>${title}</${heading}>
        ${entry.coauthors ? `<p class="coauthors">with ${escape(entry.coauthors)}</p>` : ''}
        ${entry.details ? `<p class="${working ? 'paper-status' : 'citation'}">${escape(entry.details)}</p>` : ''}
        ${entry.links.length ? `<p class="paper-links">${entry.links.map(link => `<a href="${escape(link.url)}">${escape(link.label)}</a>`).join('')}</p>` : ''}
      </li>`;
}

function section(title, id, entries, working = false) {
  return `
    <section class="research-section" aria-labelledby="${id}">
      <h2 id="${id}">${escape(title)}</h2>
      <ul class="paper-list">
${entries.map(entry => paper(entry, working)).join('\n')}
      </ul>
    </section>`;
}

const home = document('Home', '/', `
      <div class="home-layout">
        <aside class="profile-margin">
          <img class="portrait" src="${escape(profile.photo)}" alt="${escape(profile.name)}" width="4200" height="2801" fetchpriority="high">
          <div class="affiliation">
            <p>${escape(profile.title)}</p>
            <p class="institution">${escape(profile.institution)}</p>
          </div>
          <div class="profile-links"><a href="${escape(profile.cv)}">CV</a><a href="${escape(profile.scholar)}">Google Scholar</a></div>
        </aside>
        <div class="introduction">
          <h1>${escape(profile.name)}</h1>
          <div class="research-description">
${profile.description.split(/\n\s*\n/).map(paragraph => `            <p>${escape(paragraph)}</p>`).join('\n')}
          </div>
        </div>
      </div>`);

const working = document('Working Papers', '/working-papers/', `
      <h1>Working Papers</h1>
      <ul class="paper-list working-papers">
${research.working_papers.map(entry => paper(entry, true, 'h2')).join('\n')}
      </ul>
${section('Work in Progress', 'work-in-progress', research.work_in_progress, true)}`);

const publications = document('Publications', '/publications/', `
      <h1>Publications</h1>
      <nav class="section-nav" aria-label="Publication categories"><a href="#journals">Journals</a><a href="#conference-proceedings">Conference Proceedings</a><a href="#other-publications">Other Publications</a></nav>
${section('Journals', 'journals', research.journals)}
${section('Conference Proceedings', 'conference-proceedings', research.conference_proceedings)}
${section('Other Publications', 'other-publications', research.other_publications)}`);

function redirect(title, target) {
  return document(title, target, `
      <h1>${escape(title)}</h1>
      <p><a href="${escape(target)}">Continue to ${escape(title)}</a>.</p>`, `<meta http-equiv="refresh" content="0; url=${escape(target)}">`);
}

const pages = new Map([
  ['index.html', home],
  ['working-papers/index.html', working],
  ['publications/index.html', publications],
  ['cv/index.html', redirect('CV', profile.cv)],
  ['research/index.html', redirect('Working Papers', '/working-papers/')],
  ['about/index.html', redirect('Home', '/')],
  ['about.html', redirect('Home', '/')],
  ['resume/index.html', redirect('CV', profile.cv)],
  ['404.html', document('Page not found', '/404.html', '\n      <h1>Page not found</h1>\n      <p>The page may have moved. Visit the <a href="/">homepage</a> or browse <a href="/working-papers/">working papers</a> and <a href="/publications/">publications</a>.</p>', '<meta name="robots" content="noindex">')],
  ['sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['/', '/working-papers/', '/publications/'].map(path => `  <url><loc>${escape(profile.url + path)}</loc></url>`).join('\n')}\n</urlset>\n`],
  ['robots.txt', `User-agent: *\nAllow: /\nSitemap: ${profile.url}/sitemap.xml\n`],
]);

const titles = new Set();
for (const entries of Object.values(research)) {
  for (const entry of entries) {
    if (!entry.title || titles.has(entry.title)) throw new Error(`Missing or duplicate paper title: ${entry.title}`);
    titles.add(entry.title);
    for (const link of entry.links) {
      if (!link.url.startsWith('/') && new URL(link.url).protocol !== 'https:') throw new Error(`Paper links must use HTTPS or a local file: ${link.url}`);
    }
  }
}

for (const [name, html] of pages) {
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = decodeURI(match[1].split('?')[0]);
    const local = path.endsWith('/') ? `${path.slice(1)}index.html` : path.slice(1);
    if (!pages.has(local)) await access(resolve(root, local));
  }
  const file = resolve(root, name);
  if (check) {
    if (await readFile(file, 'utf8') !== html) throw new Error(`${name} is stale. Run npm run build.`);
  } else {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
}
console.log(`${check ? 'Verified' : 'Built'} ${pages.size} files; ${titles.size} research entries; all local links resolve.`);
