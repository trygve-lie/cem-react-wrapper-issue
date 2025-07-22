import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import { render, html } from '@lit-labs/ssr';

import fileServer from '@fastify/static';
import Fastify from 'fastify';

import '../src/component.js';

const app = Fastify({
  disableRequestLogging: true,
  logger: true,
});

app.get('/', async function handler (request, reply) {
    reply.headers({
        "content-type": "text/html;charset=utf-8",
    });

    const page = html`
        <!doctype html>
        <html lang="en">
            <head>
                <title>Component Prototype</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script type="importmap">
                {
                    "imports": {
                        "lit": "/build/libs/lit.js"
                    }
                }
                </script>
                <script type="module" src="/build/libs/lit-hydrate.js"></script>
                <script type="module" src="/build/component.js"></script>
            </head>
            <body>
                <test-box>
                    Slotted content
                </test-box>
            </body>
        </html>
    `;

    return new RenderResultReadable(render(page, {
      deferHydration: false
    }));
});

app.register(fileServer, {
  root: new URL('../build', import.meta.url),
  prefix: '/build/',
});

try {
  await app.listen({ port: 7000 })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}