import { rimraf } from 'rimraf';

await rimraf([
    new URL('../manifest', import.meta.url).pathname,
    new URL('../react', import.meta.url).pathname,
    new URL('../build', import.meta.url).pathname,
], {});

console.log('Successfully deleted built directories and files!');
