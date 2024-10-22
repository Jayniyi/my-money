import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/commerce-website",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This function can help split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // Split by package name
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Optional: Adjust the chunk size limit as needed
  },
});