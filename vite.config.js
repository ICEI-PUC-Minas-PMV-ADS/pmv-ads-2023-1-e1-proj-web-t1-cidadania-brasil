import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        cadastro_usuario: resolve(__dirname, 'src/pages/cadastro-usuario/index.html'),
        criar_reclamacao: resolve(__dirname, 'src/pages/criar-reclamacao/index.html'),
        feed_de_reclamacoes: resolve(__dirname, 'src/pages/feed-de-reclamacoes/index.html'),
        recuperar_senha: resolve(__dirname, 'src/pages/recuperar-senha/index.html'),
      },
    },
  },
})
