import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import { type ManifestOptions } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

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
      src: '',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

// https://vite.dev/config/
export default defineConfig(({}) => {
  // const env = loadEnv(mode, process.cwd(), '');
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
    define: {
      //'import.meta.env.GA_TRACKING_ID': JSON.stringify(env.GA_TRACKING_ID || 'G-XXXXXXXXXX'),
    },
  };
});