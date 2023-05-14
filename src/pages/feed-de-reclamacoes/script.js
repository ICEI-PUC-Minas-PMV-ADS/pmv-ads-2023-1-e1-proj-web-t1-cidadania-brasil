const botaoComentar = document.querySelector('#comentar');

botaoComentar.addEventListener('click', exibirComentarios);

function exibirComentarios() {
  document.querySelector('#secao-comentarios').classList.toggle('ocultar');
  botaoComentar.classList.toggle('lista-comentarios-ativa');
}
