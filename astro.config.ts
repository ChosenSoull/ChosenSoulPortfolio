import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { VitePWA } from 'vite-plugin-pwa';
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
    integrations: [react()], 
    
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
          }) as any,
        ],
        resolve: {
            alias: {
                '@components': path.resolve(process.cwd(), './src/components'),
                '@pages': path.resolve(process.cwd(), './src/pages'),
                '@hooks': path.resolve(process.cwd(), './src/hooks'),
            },
        },
    },
});