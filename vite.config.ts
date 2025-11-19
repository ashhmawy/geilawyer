import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Replace 'your-repo-name' with the exact name of your GitHub repository.
const REPO_NAME = 'your-repo-name'; 

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // --- START FIX FOR GITHUB PAGES ---
        base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
        // --- END FIX FOR GITHUB PAGES ---
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
