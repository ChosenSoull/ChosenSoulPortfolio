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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import { type ManifestOptions } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

import path from 'path';

const manifest: Partial<ManifestOptions> = {
  name: 'ChosenSoul | Portfolio',
  short_name: 'ChosenSoul',
  description: 'NULL',
  start_url: '/',
  display: 'standalone',
  background_color: '#3d3c3c',
  theme_color: '#000000',
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

export default defineConfig(({}) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
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
              handler: 'NetworkOnly',
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
            },
            {
              urlPattern: '/offline',
              handler: 'CacheFirst',
              options: {
                cacheName: 'offline-page',
                expiration: {
                  maxEntries: 1
                }
              }
            }
          ],
          navigateFallback: '/offline',
          navigateFallbackDenylist: [/^\/offline$/],
        }
      }),
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@sections': path.resolve(__dirname, './src/sections'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
  };
});