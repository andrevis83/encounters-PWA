import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import * as path from 'path';
import mkcert from 'vite-plugin-mkcert';

const VitePWAConfig: Partial<VitePWAOptions> = {
  injectRegister: 'auto',
  registerType: 'autoUpdate',
  includeAssets: ['/favicon.ico', '/apple-touch-icon.png'],
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: 'My Awesome App',
    short_name: 'MyApp',
    description: 'My Awesome App description',
    theme_color: '#000000',
    icons: [
      {
        src: '/app/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/app/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/app/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/app/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
};

export default defineConfig({
  plugins: [mkcert(), VitePWA(VitePWAConfig)],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@theme', replacement: path.resolve(__dirname, 'src/theme') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
  server: {
    host: true,
  },
});
