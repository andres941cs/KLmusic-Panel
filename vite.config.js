
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
    // alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //   },
  }
})

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
