import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src/pages');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        login: resolve(root, 'login/index.html'),
        cadastro_usuario: resolve(root, 'cadastro-usuario/index.html'),
        criar_reclamacao: resolve(root, 'criar-reclamacao/index.html'),
        feed_de_reclamacoes: resolve(root, 'feed-de-reclamacoes/index.html'),
        recuperar_senha: resolve(root, 'recuperar-senha/index.html'),
      },
    },
  },
});
