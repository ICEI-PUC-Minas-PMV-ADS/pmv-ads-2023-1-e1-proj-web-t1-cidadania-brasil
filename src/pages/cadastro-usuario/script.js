import { codigosDeAcessoParaGestores } from '../../db/codigos-de-acesso';

const formularioCadastrarUsuario = document.getElementById(
  'formulario-cadastrar-usuario'
);
formularioCadastrarUsuario.addEventListener('submit', cadastrarUsuario);

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

  const usuarios = JSON.parse(localStorage.getItem('@nomeapp:usuarios'));

  let tipoUsuario;

  if (codigoGestor !== '') {
    const codigoExiste = codigosDeAcessoParaGestores.includes(codigoGestor);

    if (codigoExiste) {
      tipoUsuario = 'gestor';
    } else {
      alert('O código de acesso informado não existe.');
      return;
    }
  } else {
    tipoUsuario = 'comum';
  }

  const novoUsuario = {
    id: usuarios?.length || 0,
    tipo_usuario: tipoUsuario,
    nome,
    sobrenome,
    cidade,
    bairro,
    profissao,
    email,
    senha,
    reclamacoes_salvas: [],
  };

  const usuarioJaExiste = usuarios?.find(usuario =>
    usuario.email === email ? usuario : undefined
  );

  if (usuarioJaExiste) {
    alert('Este usuário já existe');
    return;
  }

  localStorage.setItem(
    '@nomeapp:usuarios',
    JSON.stringify(usuarios ? [...usuarios, novoUsuario] : [novoUsuario])
  );

  formularioCadastrarUsuario.reset();
}
