import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // --- START FINAL GITHUB PAGES FIX ---
        // 1. Sets the base to the relative path './' to fix the 404 error
        base: './', 
        
        // 2. Defines the build process and explicitly sets index.tsx as the entry file
        //    (This is crucial for AI Studio/non-standard Vite project structures)
        build: {
            rollupOptions: {
                input: {
                    main: path.resolve(__dirname, 'index.html'),
                    entry: path.resolve(__dirname, 'index.tsx'),
                }
            }
        },
        // --- END FINAL GITHUB PAGES FIX ---
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});