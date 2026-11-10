import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(process.argv[2] || "out");
const port = Number(process.argv[3] || 4322);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain", ".woff2": "font/woff2", ".ico": "image/x-icon", ".xml": "application/xml", ".webp": "image/webp" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(root, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) f = path.join(root, "404.html");
  res.writeHead(fs.existsSync(f) ? 200 : 404, { "Content-Type": types[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
}).listen(port, () => console.log("serving", root, port));
