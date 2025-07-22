import { rimraf } from 'rimraf';

await rimraf([
    new URL('../build', import.meta.url).pathname,
], {});

console.log('Successfully deleted built directories and files!');
