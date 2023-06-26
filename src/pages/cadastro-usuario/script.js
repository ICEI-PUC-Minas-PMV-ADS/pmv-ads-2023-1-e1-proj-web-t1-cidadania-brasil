import { codigosAcessoGestor } from '../../db/codigosAcessoGestor';

const form = document.getElementById('formulario-cadastro-usuario');
form.addEventListener('submit', cadastrarUsuario);

function cadastrarUsuario(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const cidade = document.getElementById('cidade').value;
  const bairro = document.getElementById('bairro').value;
  const profissao = document.getElementById('profissao').value;
  const codigoGestor = document.getElementById('codigo-gestor').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarios = JSON.parse(localStorage.getItem('@cidadania-brasil:usuarios'));

  const usuarioExiste = usuarios?.find(usuario => email === usuario.email);

  if (usuarioExiste) {
    alert('Este usuário já existe.');
    return;
  }

  const novoUsuario = {
    id: usuarios?.length || 0,
    nome,
    sobrenome,
    cidade,
    bairro,
    profissao,
    email,
    senha,
    tipo_usuario: null,
  };

  if (codigoGestor) {
    if (codigosAcessoGestor.includes(codigoGestor))
      novoUsuario.tipo_usuario = 'gestor';
    else {
      alert('Código de acesso inválido.');
      return;
    }
  } else {
    novoUsuario.tipo_usuario = 'comum';
  }

  localStorage.setItem(
    '@cidadania-brasil:usuarios',
    JSON.stringify(usuarios ? [...usuarios, novoUsuario] : [novoUsuario])
  );

  window.location.href = '../login/index.html';
}
