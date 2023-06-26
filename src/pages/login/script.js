const formularioLogin = document.getElementById('formulario-login');
formularioLogin.addEventListener('submit', login);

const usuarioLogado = JSON.parse(
  localStorage.getItem('@cidadania-brasil:usuario-logado')
);

if (usuarioLogado) {
  window.location.href = '../feed-de-reclamacoes/index.html';
}

function login(e) {
  e.preventDefault();

  const emailInformado = document.getElementById('email').value;
  const senhaInformada = document.getElementById('senha').value;

  const usuarios = JSON.parse(localStorage.getItem('@cidadania-brasil:usuarios'));

  const usuarioEncontrado = usuarios?.find(usuario =>
    usuario.email === emailInformado ? usuario : undefined
  );

  if (usuarioEncontrado === undefined) {
    alert('Este usuário não existe');
    return;
  } else if (usuarioEncontrado?.senha === senhaInformada) {
    window.location.href = '../feed-de-reclamacoes/index.html';
  } else if (usuarioEncontrado?.senha !== senhaInformada) {
    alert('Senha incorreta');
    return;
  }

  localStorage.setItem(
    '@cidadania-brasil:usuario-logado',
    JSON.stringify(usuarioEncontrado)
  );
}
