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
import babel from 'vite-plugin-babel';

import path from 'path';

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

export default defineConfig(({}) => {
  return {
    server: {
      port: 5173
    },

    plugins: [
      react(),
      babel({
        babelConfig: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      tailwindcss(),
      VitePWA({
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
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@locale': path.resolve(__dirname, './src/locale'),
      },
    },
  };
});