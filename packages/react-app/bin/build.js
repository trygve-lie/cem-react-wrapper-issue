import * as esbuild from 'esbuild'

// Build server-side code

await esbuild.build({
    resolveExtensions: ['.js', '.ts'],
    legalComments: 'none',
    entryPoints: [
        './src/server.js',
        './src/app/**/*.js'
    ],
    loader: {
        '.js': 'jsx',
    },
    charset: 'utf8',
    target: 'esnext',
    platform: 'node',
    format: 'esm',
    outdir: './build/',
    treeShaking: false,
    minify: false,
    bundle: false,
});

// Build client-side code

await esbuild.build({
    resolveExtensions: ['.js', '.ts'],
    legalComments: 'none',
    entryPoints: [
        './src/client/client.js',
    ],
    loader: {
        '.js': 'jsx',
    },
    charset: 'utf8',
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    outdir: './build/client/',
    treeShaking: true,
    minify: true,
    bundle: true,
});
