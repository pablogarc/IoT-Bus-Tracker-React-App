import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración para la base URL
export default defineConfig({
  base: '/', // Cambia esto si tu app está en un subdirectorio, ej: '/mi-app/'
  plugins: [react()],
});