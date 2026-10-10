import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 8768);
const routes = new Set(['index.html', 'working-papers/index.html', 'publications/index.html', 'research/index.html', 'cv/index.html', 'resume/index.html', 'about/index.html', 'about.html', '404.html', 'sitemap.xml', 'robots.txt', 'assets/css/site.css', 'images/ashesh-rambachan.jpg']);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.jpg': 'image/jpeg', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };

createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405); response.end(); return; }
    const url = new URL(request.url, 'http://localhost');
    let path = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if (path.split('/').some(part => part.startsWith('.'))) throw new Error('Invalid path');
    if (routes.has(`${path}/index.html`)) {
      response.writeHead(301, { Location: `/${path}/${url.search}` });
      response.end();
      return;
    }
    if (!path || path.endsWith('/')) path += 'index.html';
    if (!routes.has(path) && !(path.startsWith('assets/files/') && path.endsWith('.pdf'))) throw new Error('Not public');
    const file = resolve(root, path);
    const info = await stat(file);
    if (!info.isFile()) throw new Error('Not a file');
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Content-Length': info.size, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(resolve(root, '404.html')));
  }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
