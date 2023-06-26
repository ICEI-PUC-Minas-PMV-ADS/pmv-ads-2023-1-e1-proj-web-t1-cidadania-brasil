const form = document.getElementById('formulario-recuperar-senha');
form.addEventListener('submit', recuperarSenha);

function recuperarSenha(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const novaSenha = document.getElementById('nova-senha').value;
  const repetirNovaSenha = document.getElementById('repetir-nova-senha').value;

  const usuarios = JSON.parse(localStorage.getItem('@cidadania-brasil:usuarios'));

  const usuarioExiste = usuarios?.find(usuario => email === usuario.email);

  if (!usuarioExiste) {
    alert('Este usuário não existe.');
    return;
  }

  if (novaSenha !== repetirNovaSenha) {
    alert('As senhas informadas não são iguais.');
    return;
  }

  const usuariosEditados = usuarios.map(usuario =>
    email === usuario.email ? { ...usuario, senha: novaSenha } : usuario
  );

  localStorage.setItem('@cidadania-brasil:usuarios', JSON.stringify(usuariosEditados));

  alert('Senha alterada com sucesso');

  window.location.href = '../login/index.html';
}
