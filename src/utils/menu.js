import { buscarUsuarioLogado } from './buscarUsuarioLogado';
import { criarIniciaisNomeUsuario } from './criarIniciaisNomeUsuario';

const dadosUsuarioLogado = buscarUsuarioLogado();

function inserirIniciaisUsuarioLogado() {
  document.querySelector('.menu #avatar-menu').textContent =
    criarIniciaisNomeUsuario(dadosUsuarioLogado.nome);
}

const btnSairDaConta = document.getElementById('sair-da-conta');
btnSairDaConta.addEventListener('click', () => {
  localStorage.removeItem('@nomeapp:usuario-logado');
  window.location.href = '../login/index.html';
});

inserirIniciaisUsuarioLogado();
