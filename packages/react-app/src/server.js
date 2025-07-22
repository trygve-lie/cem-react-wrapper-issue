import fileServer from '@fastify/static';
import Fastify from 'fastify';

import ReactDOMServer from 'react-dom/server';
import React from 'react';

import App from './app/App.js';

const server = Fastify({
  disableRequestLogging: true,
  logger: true,
});

server.get('/', async function handler (request, reply) {
    reply.headers({
        "content-type": "text/html;charset=utf-8",
    });

    const main = ReactDOMServer.renderToString(<App />);
    
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Server - React Plain</title>
        </head>
        <body>
          <div id="root">${main}</div>
          <script type="module" src="/static/client.js"></script>
        </body>  
      </html>`;
});

server.register(fileServer, {
  root: new URL('./client', import.meta.url),
  prefix: '/static/',
});

try {
  await server.listen({ port: 8000 })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}
