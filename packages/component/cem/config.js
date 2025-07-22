import react from './config.react.js';

export default {
  // Globs to analyze
  globs: ['src/**/*.js'],

  // Globs to exclude
  exclude: [],
  
  // Directory to output CEM to
  outdir: 'manifest/',
  
  // Run in dev mode, provides extra logging
  dev: true,
  
  // Run in watch mode, runs on file changes
  watch: false,
  
  // Include third party custom elements manifests
  dependencies: false,
  
  // Output CEM path to `package.json`, defaults to true
  packagejson: false,
  
  // Enable special handling for litelement
  litelement: true,

  // Plugins to use
  plugins: [
    react,
  ],
}