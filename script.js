const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const root = __dirname;
const port = 4174;
const host = '127.0.0.1';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

const server = http.createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url, `http://${host}`).pathname);
    const targetPath = url === '/' ? '/index.html' : url;
    const filePath = path.resolve(root, `.${targetPath}`);

    if (!filePath.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }

    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Arquivo não encontrado');
  }
});

server.listen(port, host, () => {
  console.log(`LVS Page: http://${host}:${port}`);
});
