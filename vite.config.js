import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugIn } from './src/manifest';

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  optimizeDeps: {
    exclude: ['@mui_material_InputBase.js']
  }
})
