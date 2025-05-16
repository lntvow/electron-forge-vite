import { defineConfig } from 'vite'
import { version } from './package.json'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/%__APP_VERSION__%/g, version)
      },
    },
  ],
})
