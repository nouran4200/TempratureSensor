import 'zone.js/dist/zone-node';
import { renderModule } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { Request, Response } from 'express';

// Enable production mode when in production environment
if ((process.env as any).NODE_ENV === 'production') {
  enableProdMode();
}


const express = require('express');
const { join } = require('path');
const { readFileSync } = require('fs');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Create the Express app
const app = express();

const PORT = process.env['PORT'] || 4000;

// Serve static files
app.get('*.*', express.static(join(__dirname, 'dist/frontend')));

// Render Angular application on server
app.get('*', (req: Request, res: Response) => {
  const indexHtml = readFileSync(join(__dirname, 'dist/frontend/index.html')).toString();
  renderModule(AppServerModule, { document: indexHtml, url: (req as any).url })  // or req.url as string
      .then(html => res.send(html))
      .catch(err => console.error(err));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
