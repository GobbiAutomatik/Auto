const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Tipos MIME
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`📥 ${req.method} ${req.url}`);

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Arquivo não encontrado - servir index.html para SPA
        fs.readFile('./index.html', (error, content) => {
          if (error) {
            res.writeHead(500);
            res.end('Erro interno do servidor');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Erro do servidor: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('🚀 Servidor rodando!');
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📍 Ou: http://127.0.0.1:${PORT}`);
  console.log('');
  console.log('💡 Para parar: Ctrl+C');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ Porta ${PORT} já está em uso!`);
    console.log('🔄 Tentando porta 3001...');
    
    const server2 = http.createServer((req, res) => {
      // Mesmo código do servidor
      let filePath = '.' + req.url;
      if (filePath === './') filePath = './index.html';
      
      const extname = String(path.extname(filePath)).toLowerCase();
      const mimeType = mimeTypes[extname] || 'application/octet-stream';

      fs.readFile(filePath, (error, content) => {
        if (error) {
          if (error.code === 'ENOENT') {
            fs.readFile('./index.html', (error, content) => {
              if (error) {
                res.writeHead(500);
                res.end('Erro interno do servidor');
              } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
              }
            });
          } else {
            res.writeHead(500);
            res.end(`Erro do servidor: ${error.code}`);
          }
        } else {
          res.writeHead(200, { 'Content-Type': mimeType });
          res.end(content, 'utf-8');
        }
      });
    });
    
    server2.listen(3001, () => {
      console.log('🚀 Servidor rodando na porta alternativa!');
      console.log(`📍 Acesse: http://localhost:3001`);
    });
  } else {
    console.log('❌ Erro no servidor:', err);
  }
});