import { buscarUsuarioLogado } from '../../utils/buscarUsuarioLogado';
import { criarIniciaisNomeUsuario } from '../../utils/criarIniciaisNomeUsuario';

const dadosUsuarioLogado = buscarUsuarioLogado();

const containerReclamacoes = document.querySelector('#container-reclamacoes');
const templateHtmlReclamacao = containerReclamacoes.innerHTML;

const containerComentarios = document.querySelector('#container-comentarios');
const templateHtmlComentarios = containerComentarios.innerHTML;

function exibirComentarios(idSecaoAlterada) {
  document.querySelectorAll('[data-comentario="secao-comentarios"]')[idSecaoAlterada].classList.toggle('ocultar')
}

// function verificarSeASecaoComentariosEstaAberta(IdReclamacao) {
//   const secaoComentarios = document.querySelectorAll("section.secao-comentarios")[IdReclamacao];
//   return secaoComentarios.classList[1] === 'ocultar' ? null : IdReclamacao;
// }

function curtirReclamacao(idReclamacaoCurtida) {
  const reclamacoes = JSON.parse(
    localStorage.getItem('@cidadania-brasil:reclamacoes')
  );

  const curtidas = reclamacoes[idReclamacaoCurtida].curtidas;
  let curtidasEditadas = []

  if (curtidas.includes(dadosUsuarioLogado.id)) {
    curtidasEditadas = curtidas.filter(IdCurtida => IdCurtida !== dadosUsuarioLogado.id)
  } else {
    curtidasEditadas = [...curtidas, dadosUsuarioLogado.id];
  }

  const reclamacoesEditadas = reclamacoes.map(reclamacao =>
    reclamacao.id === idReclamacaoCurtida
      ? { ...reclamacao, curtidas: curtidasEditadas }
      : reclamacao
  );

  localStorage.setItem(
    '@cidadania-brasil:reclamacoes',
    JSON.stringify(reclamacoesEditadas)
  );

  atualizarReclamacao({ idReclamacaoAlterada: idReclamacaoCurtida, curtidas: curtidasEditadas })
}

function criarComentario(e, reclamacao) {
  e.preventDefault();

  const idReclamacao = reclamacao.id

  const textoComentario = e.target.querySelector('input[name="comentar"]').value

  const reclamacoes = JSON.parse(
    localStorage.getItem('@cidadania-brasil:reclamacoes')
  );

  const comentario = {
    id: reclamacoes[idReclamacao].comentarios.length || 0,
    id_reclamacao: idReclamacao,
    texto_comentario: textoComentario,
    usuario: {
      ...dadosUsuarioLogado,
    },
  };

  const reclamacoesEditadas = reclamacoes.map(reclamacao =>
    reclamacao.id === idReclamacao
      ? { ...reclamacao, comentarios: [...reclamacao.comentarios, comentario] }
      : reclamacao
  );

  localStorage.setItem(
    '@cidadania-brasil:reclamacoes',
    JSON.stringify(reclamacoesEditadas)
  );

  // listarComentarios(reclamacao)
}

function atualizarReclamacao({ idReclamacaoAlterada, curtidas }) {
  if (curtidas) {
    document.querySelectorAll('[data-reclamacao="curtidas"]')[idReclamacaoAlterada].textContent =
      `${curtidas.length} pessoas curtiram`;
  }
}

function listarReclamacoes() {
  containerReclamacoes.innerHTML = '';

  const reclamacoes = JSON.parse(
    localStorage.getItem('@cidadania-brasil:reclamacoes')
  );

  if (!reclamacoes) return;

  reclamacoes.forEach(reclamacao => {
    containerReclamacoes.innerHTML += templateHtmlReclamacao;
  });

  reclamacoes.forEach((reclamacao, index) => {
    document.querySelectorAll('[data-reclamacao="avatar-autor"]')[index].textContent = criarIniciaisNomeUsuario(reclamacao.usuario.nome);
    document.querySelectorAll('[data-reclamacao="nome"]')[index].textContent = `${reclamacao.usuario.nome} ${reclamacao.usuario.sobrenome}`;
    document.querySelectorAll('[data-reclamacao="profissao"]')[index].textContent = reclamacao.usuario.profissao;
    document.querySelectorAll('[data-reclamacao="bairro"]')[index].textContent = reclamacao.bairro;
    document.querySelectorAll('[data-reclamacao="categoria"]')[index].textContent = `Reclamação sobre ${reclamacao.categoria}`;
    document.querySelectorAll('[data-reclamacao="texto"]')[index].textContent = reclamacao.texto_reclamacao;
    document.querySelectorAll('[data-reclamacao="curtidas"]')[index].textContent = `${reclamacao.curtidas.length} pessoas curtiram`;
    document.querySelectorAll('[data-reclamacao="comentarios"]')[index].textContent = `${reclamacao.comentarios.length} comentários`;
    document.querySelectorAll('[data-reclamacao="data"]')[index].textContent = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(reclamacao.data));

    const conteudoReclamacao = document.querySelectorAll('[data-reclamacao="conteudo"]')[index]

    if (reclamacao.imagem) {
      conteudoReclamacao.querySelector('img').src = reclamacao.imagem
    } else {
      conteudoReclamacao.querySelector('figure').remove()
    }

    document.querySelectorAll('[data-reclamacao="btn-comentar"]')[index].addEventListener('click', () => {
      exibirComentarios(reclamacao.id)
    })

    document.querySelectorAll('[data-reclamacao="btn-curtir"]')[index].addEventListener('click', () => {
      curtirReclamacao(reclamacao.id)
    })

    document.querySelectorAll('[data-comentario="form-criar-comentario"]')[index].addEventListener('submit', e => {
      criarComentario(e, reclamacao);
    });

    listarComentarios(reclamacao, index)

    // Comentarios
    // document.querySelectorAll("section.secao-comentario")[index].className =
    //   `secao-comentarios ${idReclamacaoAlterada === reclamacao.id ? '' : 'ocultar'}`;
  })
}

function listarComentarios(reclamacao, index) {
  document.querySelectorAll('[data-comentario="avatar-comentar"]')[index].textContent =
  criarIniciaisNomeUsuario(dadosUsuarioLogado.nome);
  
  const comentarios = reclamacao.comentarios
  // .reverse();

  if (!comentarios) return;
  
  containerComentarios.innerHTML = '';

  comentarios.forEach(comentario => {
    // containerComentarios.innerHTML += templateHtmlComentarios;
  });

  // comentarios.forEach((comentario, index) => {
    // document.querySelectorAll('[data-comentario="avatar-autor"]')[index].textContent = 
      // criarIniciaisNomeUsuario(dadosUsuarioLogado.nome);
    // document.querySelectorAll('[data-comentario="nome"]')[index].textContent = comentario.usuario.nome;
    // document.querySelectorAll('[data-comentario="profissao"]')[index].textContent = comentario.usuario.profissao;
    // document.querySelectorAll('[data-comentario="bairro"]')[index].textContent = comentario.usuario.bairro;
    // document.querySelectorAll('[data-comentario="comentario"]')[index].textContent = comentario.texto_comentario;
  // });
}

listarReclamacoes({});
