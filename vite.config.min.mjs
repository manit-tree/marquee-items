import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/marquee-items',
        minify: true,
        sourcemap: false,
        emptyOutDir: false,

        lib: {
            entry: './modules/marquee-items/index.js',
            name:'marquee_items',
            formats: ['iife'],
            fileName: (format) => `[name].min.js`
        }
    }
})