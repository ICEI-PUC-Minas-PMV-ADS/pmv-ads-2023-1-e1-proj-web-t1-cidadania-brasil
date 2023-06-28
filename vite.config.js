import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  server: {
    open: 'pages/login/index.html',
  },
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'pages/index.html'),
        login: resolve(root, 'pages/login/index.html'),
        cadastro_usuario: resolve(root, 'pages/cadastro-usuario/index.html'),
        criar_reclamacao: resolve(root, 'pages/criar-reclamacao/index.html'),
        feed_de_reclamacoes: resolve(
          root,
          'pages/feed-de-reclamacoes/index.html'
        ),
        recuperar_senha: resolve(root, 'pages/recuperar-senha/index.html'),
      },
    },
  },
});
