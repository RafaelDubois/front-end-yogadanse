import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import fontOptimizationPlugin from 'vite-plugin-font-optimization'

export default defineConfig({
  plugins: [solidPlugin(),fontOptimizationPlugin({providers: ['https://fonts.cdnfonts.com/',"https://fonts.cdnfonts.com/css/mythical-prince","https://fonts.cdnfonts.com/css/samarkan"],
})],
  server: {
    port: 3000,
  },
  optimizeFonts : false,
  build: {
    target: 'esnext',
  },
});
