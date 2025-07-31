import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  // depending on your application, base can also be "/"
  const PORT = 3000;

  return {
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: PORT,
      host: true
    },
    build: {
      chunkSizeWarningLimit: 1600
    },
    preview: {
      open: true,
      host: true
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: {
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
        'src': path.resolve(__dirname, './src')
      }
    },
    base: '/',
    plugins: [react()]
  };
});
