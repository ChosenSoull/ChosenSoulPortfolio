/*
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro'
import { type ManifestOptions } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import path from 'path';
import vercel from '@astrojs/vercel';

const manifest: Partial<ManifestOptions> = {
  name: 'ChosenSoul | Portfolio',
  short_name: 'ChosenSoul',
  description: 'Portfolio of a programmer enthusiast frontend-embedded.',
  start_url: '/',
  display: 'standalone',
  background_color: '#11002C',
  theme_color: '#11002C',
  lang: 'en',
  icons: [
    {
      src: '/assets/icons/logo.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/assets/icons/logo.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

export default defineConfig({
    integrations: [
      react(),
      AstroPWA({
        registerType: 'autoUpdate',
        injectRegister: 'script',
        manifest: manifest,
          workbox: {
            globPatterns: ['**/*.{ico,png,jpg,jpeg,svg,woff,woff2}'],
            runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'pages',
                networkTimeoutSeconds: 3
              }
            },
            {
              urlPattern: /\.(?:html|css|js)$/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'no-cache'
              }
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico|woff|woff2|ttf|otf)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'assets',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 7 * 24 * 60 * 60
                }
              }
            }
          ]
        }
      })
    ], 

    server: {
      port: 5173
    },

    output: 'static',
    adapter: vercel({
      isr: {
        expiration: 60 * 60 * 48,
      },
    }),

    vite: { 
        plugins: [
          yaml(),
          (tailwindcss as any)(),
        ],
        resolve: {
            alias: {
                '@components': path.resolve(process.cwd(), './src/components'),
                '@pages': path.resolve(process.cwd(), './src/pages'),
                '@hooks': path.resolve(process.cwd(), './src/hooks'),
                '@locale': path.resolve(process.cwd(), './src/locale'),
            },
        },
    },

});

