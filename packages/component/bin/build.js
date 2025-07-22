import * as esbuild from 'esbuild'

await esbuild.build({
    resolveExtensions: ['.js', '.ts'],
    legalComments: 'none',
    entryPoints: ['@lit-labs/ssr-client/lit-element-hydrate-support.js'],
    charset: 'utf8',
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    outfile: './build/libs/lit-hydrate.js',
    treeShaking: true,
    minify: true,
    bundle: true,
});

await esbuild.build({
    resolveExtensions: ['.js', '.ts'],
    legalComments: 'none',
    entryPoints: ['lit'],
    charset: 'utf8',
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    outdir: './build/libs/',
    treeShaking: false,
    minify: true,
    bundle: true,
});

await esbuild.build({
    resolveExtensions: ['.js', '.ts'],
    legalComments: 'none',
    entryPoints: ['./src/component.js'],
    charset: 'utf8',
    external: ['lit'],
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    outfile: './build/component.js',
    treeShaking: true,
    minify: true,
    bundle: true,
});

