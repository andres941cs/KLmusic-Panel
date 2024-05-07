import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }],
    alias: {
      "@assets": path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@schemas": path.resolve(__dirname, 'src/schemas'),
      // MODIFICAR TAMBIEN tsconfig.json
    },
  },
})
