import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from '../app/App.js';

console.log('React hydration');

// @ts-ignore
hydrateRoot(document.getElementById('root'), <App />);