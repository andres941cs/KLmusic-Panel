
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    alias: {
        "@": path.resolve(new URL('.', import.meta.url).pathname, "./src"),
      },
  },
  // resolve: {
  //   alias: [
  //     {
  //       '@': path.resolve(new URL('.', import.meta.url).pathname, 'src/'),
  //     },
  //   ],
  // },
})

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
