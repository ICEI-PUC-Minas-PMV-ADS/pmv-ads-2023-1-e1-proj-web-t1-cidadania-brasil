function sairDaConta() {
  localStorage.removeItem('@nomeapp:usuario-logado');
  window.location.href = '../login/index.html';
}
