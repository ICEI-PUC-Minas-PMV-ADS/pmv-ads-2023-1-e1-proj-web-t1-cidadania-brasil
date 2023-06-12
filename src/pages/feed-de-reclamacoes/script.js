import { buscarUsuarioLogado } from '../../utils/buscarUsuarioLogado';
import { criarIniciaisNomeUsuario } from '../../utils/criarIniciaisNomeUsuario';

const dadosUsuarioLogado = buscarUsuarioLogado();

function exibirComentarios(reclamacaoId) {
  document
    .querySelector(`section#secao-de-comentarios-${reclamacaoId}`)
    .classList.toggle('ocultar');
}

function verificarSeASecaoComentariosEstaAberta(reclamacaoId) {
  const secaoComentarios = document.querySelector(
    `section#secao-de-comentarios-${reclamacaoId}`
  );

  return secaoComentarios.classList[1] === 'ocultar' ? null : reclamacaoId;
}

function adicionarComentario(e, reclamacaoId) {
  e.preventDefault();

  const textoComentario = document.getElementById(
    `input-comentar-${reclamacaoId}`
  ).value;

  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));

  const comentario = {
    id: reclamacoes[reclamacaoId].comentarios.length || 0,
    id_reclamacao: reclamacaoId,
    texto_comentario: textoComentario,
    usuario: {
      ...dadosUsuarioLogado,
    },
  };

  const reclamacoesEditadas = reclamacoes.map(reclamacao =>
    reclamacao.id === reclamacaoId
      ? { ...reclamacao, comentarios: [...reclamacao.comentarios, comentario] }
      : reclamacao
  );

  localStorage.setItem(
    '@nomeapp:reclamacoes',
    JSON.stringify(reclamacoesEditadas)
  );

  montarEstruturaReclamacao({
    apagarReclamacoesNaDOM: true,
    idReclamacaoAlterada: reclamacaoId,
  });
}

function curtirReclamacao(reclamacaoId) {
  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));
  const curtidasReclamacao = reclamacoes[reclamacaoId].curtidas;
  const indiceCurtidaEncontrada = curtidasReclamacao.indexOf(
    dadosUsuarioLogado.id
  );

  let curtidasEditadas = curtidasReclamacao;

  if (indiceCurtidaEncontrada >= 0) {
    curtidasEditadas.splice(indiceCurtidaEncontrada, 1);
  } else {
    curtidasEditadas.push(dadosUsuarioLogado.id);
  }

  const reclamacoesEditadas = reclamacoes.map(reclamacao =>
    reclamacao.id === reclamacaoId
      ? { ...reclamacao, curtidas: curtidasEditadas }
      : reclamacao
  );

  localStorage.setItem(
    '@nomeapp:reclamacoes',
    JSON.stringify(reclamacoesEditadas)
  );

  montarEstruturaReclamacao({
    apagarReclamacoesNaDOM: true,
    idReclamacaoAlterada: verificarSeASecaoComentariosEstaAberta(reclamacaoId),
  });
}

function salvarReclamacao(reclamacaoId) {
  const usuarios = JSON.parse(localStorage.getItem('@nomeapp:usuarios'));
  const reclamacoesSalvas = usuarios[dadosUsuarioLogado.id].reclamacoes_salvas;
  const indiceReclamacaoSalvaEncontrada =
    reclamacoesSalvas.indexOf(reclamacaoId);

  let reclamacoesSalvasEditadas = reclamacoesSalvas;

  if (indiceReclamacaoSalvaEncontrada >= 0) {
    reclamacoesSalvasEditadas.splice(indiceReclamacaoSalvaEncontrada);
  } else {
    reclamacoesSalvasEditadas.push(reclamacaoId);
  }

  const usuariosEditados = usuarios.map(usuario =>
    usuario.id === dadosUsuarioLogado.id
      ? { ...usuario, reclamacoes_salvas: reclamacoesSalvas }
      : usuario
  );

  const usuarioLogadoEditado = {
    ...dadosUsuarioLogado,
    reclamacoes_salvas: reclamacoesSalvas,
  };

  localStorage.setItem('@nomeapp:usuarios', JSON.stringify(usuariosEditados));
  localStorage.setItem(
    '@nomeapp:usuario-logado',
    JSON.stringify(usuarioLogadoEditado)
  );

  montarEstruturaReclamacao({
    apagarReclamacoesNaDOM: true,
    idReclamacaoAlterada: verificarSeASecaoComentariosEstaAberta(reclamacaoId),
  });
}

function montarEstruturaReclamacao({
  apagarReclamacoesNaDOM = false,
  idReclamacaoAlterada = null,
}) {
  const containerReclamacoes = document.querySelector('#container-reclamacoes');

  if (apagarReclamacoesNaDOM) {
    containerReclamacoes.innerHTML = '';
  }

  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));

  if (!reclamacoes) return;

  reclamacoes.forEach(reclamacao => {
    const article = document.createElement('article');
    article.className = 'reclamacao';
    containerReclamacoes.appendChild(article);

    const header = document.createElement('header');
    article.appendChild(header);

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = criarIniciaisNomeUsuario(reclamacao.usuario.nome);
    header.appendChild(avatar);

    const nome = document.createElement('h2');
    nome.textContent = `${reclamacao.usuario.nome} ${reclamacao.usuario.sobrenome}`;
    header.appendChild(nome);

    const informacoesUsuario = document.createElement('div');
    informacoesUsuario.className = 'informacoes-usuario';
    header.appendChild(informacoesUsuario);

    const profissao = document.createElement('span');
    profissao.textContent = reclamacao.usuario.profissao;
    informacoesUsuario.appendChild(profissao);

    const bairro = document.createElement('span');
    bairro.textContent = reclamacao.bairro;
    informacoesUsuario.appendChild(bairro);

    const data = document.createElement('span');
    data.textContent = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(reclamacao.data));
    informacoesUsuario.appendChild(data);

    const conteudo = document.createElement('section');
    conteudo.className = 'conteudo';
    article.appendChild(conteudo);

    const categoriaReclamacao = document.createElement('h3');
    categoriaReclamacao.textContent = `Reclamação sobre ${reclamacao.categoria}`;
    conteudo.appendChild(categoriaReclamacao);

    const textoReclamacao = document.createElement('p');
    textoReclamacao.textContent = reclamacao.texto_reclamacao;
    conteudo.appendChild(textoReclamacao);

    if (reclamacao.imagem) {
      const figure = document.createElement('figure');
      conteudo.appendChild(figure);

      const img = document.createElement('img');
      img.setAttribute('src', reclamacao.imagem);
      figure.appendChild(img);
    }

    const detalhesSociais = document.createElement('div');
    detalhesSociais.className = 'detalhes-sociais';
    conteudo.appendChild(detalhesSociais);

    const curtidas = document.createElement('span');
    detalhesSociais.appendChild(curtidas);

    const iconeCurtidas = document.createElement('i');
    iconeCurtidas.className = 'ph-fill ph-thumbs-up';
    curtidas.appendChild(iconeCurtidas);

    const textoCurtidas = document.createElement('span');
    textoCurtidas.textContent = `${reclamacao.curtidas.length} pessoas curtiram`;
    curtidas.appendChild(textoCurtidas);

    const textoComentarios = document.createElement('span');
    textoComentarios.textContent = `${reclamacao.comentarios.length} comentários`;
    detalhesSociais.appendChild(textoComentarios);

    const acoes = document.createElement('div');
    acoes.className = 'acoes';
    article.appendChild(acoes);

    const btnCurtirAtivo = reclamacao.curtidas.find(
      idUsuarioCurtiu => idUsuarioCurtiu === dadosUsuarioLogado.id
    );

    const btnCurtir = document.createElement('button');
    btnCurtir.setAttribute('type', 'button');
    btnCurtir.className = `${btnCurtirAtivo >= 0 ? 'ativo' : ''}`;
    btnCurtir.addEventListener('click', () => {
      curtirReclamacao(reclamacao.id);
    });
    acoes.appendChild(btnCurtir);

    const iconeCurtir = document.createElement('i');
    iconeCurtir.className = `${
      btnCurtirAtivo >= 0 ? 'ph-fill ph-thumbs-up' : 'ph ph-thumbs-up'
    }`;
    btnCurtir.appendChild(iconeCurtir);

    const textoCurtir = document.createElement('span');
    textoCurtir.textContent = 'Gostei';
    btnCurtir.appendChild(textoCurtir);

    const btnComentar = document.createElement('button');
    btnComentar.setAttribute('type', 'button');
    btnComentar.addEventListener('click', () => {
      exibirComentarios(reclamacao.id);
    });
    acoes.appendChild(btnComentar);

    const iconeComentar = document.createElement('i');
    iconeComentar.className = 'ph ph-chat-centered-text';
    btnComentar.appendChild(iconeComentar);

    const textoComentar = document.createElement('span');
    textoComentar.textContent = 'Comentar';
    btnComentar.appendChild(textoComentar);

    const btnSalvarAtivo = buscarUsuarioLogado().reclamacoes_salvas.find(
      idReclamacaoSalva => idReclamacaoSalva === reclamacao.id
    );

    const btnSalvar = document.createElement('button');
    btnSalvar.setAttribute('type', 'button');
    btnSalvar.className = `${btnSalvarAtivo >= 0 ? 'ativo' : ''}`;
    btnSalvar.addEventListener('click', () => {
      salvarReclamacao(reclamacao.id);
    });
    acoes.appendChild(btnSalvar);

    const iconeSalvar = document.createElement('i');
    iconeSalvar.className = `${
      btnSalvarAtivo >= 0
        ? 'ph-fill ph-bookmark-simple'
        : 'ph ph-bookmark-simple'
    }`;
    btnSalvar.appendChild(iconeSalvar);

    const textoSalvar = document.createElement('span');
    textoSalvar.textContent = 'Salvar';
    btnSalvar.appendChild(textoSalvar);

    montarEstruturaComentarios({
      container: article,
      reclamacao,
      idReclamacaoAlterada,
    });
  });
}

function montarEstruturaComentarios({
  container,
  reclamacao,
  idReclamacaoAlterada,
}) {
  const reclamacaoId = reclamacao.id;

  const secaoComentarios = document.createElement('section');
  secaoComentarios.setAttribute('id', `secao-de-comentarios-${reclamacaoId}`);
  secaoComentarios.className = `secao-comentarios ${
    idReclamacaoAlterada === reclamacaoId ? '' : 'ocultar'
  }`;
  container.appendChild(secaoComentarios);

  const containerAdicionarComentario = document.createElement('form');
  containerAdicionarComentario.addEventListener('submit', e => {
    adicionarComentario(e, reclamacaoId);
  });
  containerAdicionarComentario.className = 'form-adicionar-comentario';
  secaoComentarios.appendChild(containerAdicionarComentario);

  const avatarUsuarioLogado = document.createElement('div');
  avatarUsuarioLogado.className = 'avatar';
  avatarUsuarioLogado.textContent = criarIniciaisNomeUsuario(
    dadosUsuarioLogado.nome
  );
  containerAdicionarComentario.appendChild(avatarUsuarioLogado);

  const inputComentario = document.createElement('input');
  inputComentario.setAttribute('id', `input-comentar-${reclamacaoId}`);
  inputComentario.setAttribute('type', 'text');
  inputComentario.setAttribute('placeholder', 'Adicionar comentário');
  containerAdicionarComentario.appendChild(inputComentario);

  const listaComentarios = document.createElement('ul');
  listaComentarios.className = 'comentarios';
  secaoComentarios.appendChild(listaComentarios);

  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));
  const comentarios = reclamacoes[reclamacaoId].comentarios.reverse();

  if (!comentarios) return;

  comentarios.forEach(comentario => {
    const comentarioLi = document.createElement('li');
    listaComentarios.appendChild(comentarioLi);

    const avatarCriadorComentario = document.createElement('div');
    avatarCriadorComentario.className = 'avatar';
    avatarCriadorComentario.textContent = criarIniciaisNomeUsuario(
      comentario.usuario.nome
    );
    comentarioLi.appendChild(avatarCriadorComentario);

    const conteudoComentario = document.createElement('div');
    conteudoComentario.className = 'conteudo-comentario';
    comentarioLi.appendChild(conteudoComentario);

    const header = document.createElement('header');
    conteudoComentario.appendChild(header);

    const primeiraLinhaHeader = document.createElement('div');
    header.appendChild(primeiraLinhaHeader);

    const nome = document.createElement('h4');
    nome.textContent = `${comentario.usuario.nome} ${comentario.usuario.sobrenome}`;
    primeiraLinhaHeader.appendChild(nome);

    const tipoUsuario = document.createElement('span');
    if (reclamacao.usuario.id === comentario.usuario.id) {
      tipoUsuario.className = 'tipo-usuario autor';
      tipoUsuario.textContent = 'Autor';
    } else if (comentario.usuario.tipo_usuario === 'gestor') {
      tipoUsuario.className = 'tipo-usuario gestor';
      tipoUsuario.textContent = `Gestor`;
    }
    primeiraLinhaHeader.appendChild(tipoUsuario);

    const segundaLinhaHeader = document.createElement('div');
    header.appendChild(segundaLinhaHeader);

    const profissao = document.createElement('span');
    profissao.className = 'profissao';
    profissao.textContent = `${comentario.usuario.profissao}`;
    segundaLinhaHeader.appendChild(profissao);

    const separador = document.createElement('span');
    separador.className = 'separador';
    separador.innerHTML = '&#8226;';
    segundaLinhaHeader.appendChild(separador);

    const bairro = document.createElement('span');
    bairro.className = 'bairro';
    bairro.textContent = `${comentario.usuario.bairro}`;
    segundaLinhaHeader.appendChild(bairro);

    const texto = document.createElement('p');
    texto.textContent = `${comentario.texto_comentario}`;
    conteudoComentario.appendChild(texto);
  });
}

montarEstruturaReclamacao({});
