// FIXME: Tenho que colocar os dados (avatar) do usuario logado no menu do usuario tbm

function exibirComentarios(btnClicado) {
  const idBtnClicado = btnClicado.id;
  btnClicado.classList.toggle('lista-comentarios-ativa');
  document
    .querySelector(`section#ocultar-${idBtnClicado}`)
    .classList.toggle('ocultar');
}

function adicionarComentario(e, reclamacaoId) {
  if (e.key !== 'Enter') return;

  const comentario = {
    id: sdasd,
    id_reclamacao: reclamacaoId,
    nome_usuario: 'nome teste',
    profissao: 'profissao teste',
    bairro: 'bairro teste',
    texto: 'e.target.value',
  };

  console.log('enter');
  console.log(textoComentario);
}

montarEstruturaReclamacao();

function montarEstruturaReclamacao() {
  const containerReclamacoes = document.querySelector('#container-reclamacoes');

  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));

  // FIXME: Criar uma estrutura HTML indicando que não existem reclamações.
  if (!reclamacoes) return;

  reclamacoes.forEach((reclamacao, reclamacaoId) => {
    const article = document.createElement('article');
    article.className = 'reclamacao';
    article.setAttribute('id', `${reclamacao.id}`);
    containerReclamacoes.appendChild(article);

    const header = document.createElement('header');
    article.appendChild(header);

    // FIXME: criar a funcionalidade da sigla no avatar do usuario
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = 'RO';
    header.appendChild(avatar);

    const nome = document.createElement('h2');
    nome.textContent = reclamacao.nome_usuario;
    header.appendChild(nome);

    const informacoesUsuario = document.createElement('div');
    informacoesUsuario.className = 'informacoes-usuario';
    header.appendChild(informacoesUsuario);

    const profissao = document.createElement('span');
    profissao.textContent = reclamacao.profissao;
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
    textoCurtidas.textContent = `${reclamacao.curtidas} pessoas curtiram`;
    curtidas.appendChild(textoCurtidas);

    const textoComentarios = document.createElement('span');
    textoComentarios.textContent = `${reclamacao.comentarios} comentários`;
    detalhesSociais.appendChild(textoComentarios);

    const acoes = document.createElement('div');
    acoes.className = 'acoes';
    article.appendChild(acoes);

    const btnCurtir = document.createElement('button');
    btnCurtir.setAttribute('type', 'button');
    acoes.appendChild(btnCurtir);
    const iconeCurtir = document.createElement('i');
    iconeCurtir.className = 'ph ph-thumbs-up';
    btnCurtir.appendChild(iconeCurtir);
    const textoCurtir = document.createElement('span');
    textoCurtir.textContent = 'Gostei';
    btnCurtir.appendChild(textoCurtir);

    const btnComentar = document.createElement('button');
    btnComentar.setAttribute('type', 'button');
    btnComentar.setAttribute('id', `comentar-${reclamacaoId}`);
    btnComentar.addEventListener('click', () => {
      exibirComentarios(btnComentar);
    });
    acoes.appendChild(btnComentar);
    const iconeComentar = document.createElement('i');
    iconeComentar.className = 'ph ph-chat-centered-text';
    btnComentar.appendChild(iconeComentar);
    const textoComentar = document.createElement('span');
    textoComentar.textContent = 'Comentar';
    btnComentar.appendChild(textoComentar);

    const btnSalvar = document.createElement('button');
    btnSalvar.setAttribute('type', 'button');
    acoes.appendChild(btnSalvar);
    const iconeSalvar = document.createElement('i');
    iconeSalvar.className = 'ph ph-bookmark-simple';
    btnSalvar.appendChild(iconeSalvar);
    const textoSalvar = document.createElement('span');
    textoSalvar.textContent = 'Salvar';
    btnSalvar.appendChild(textoSalvar);

    montarEstruturaComentarios(article, reclamacaoId);
  });
}

function montarEstruturaComentarios(article, reclamacaoId) {
  const secaoComentarios = document.createElement('section');
  secaoComentarios.setAttribute('id', `ocultar-comentar-${reclamacaoId}`);
  secaoComentarios.className = 'secao-comentarios ocultar';
  article.appendChild(secaoComentarios);

  const containerAdicionarComentario = document.createElement('div');
  containerAdicionarComentario.className = 'container-adicionar-comentario';
  secaoComentarios.appendChild(containerAdicionarComentario);

  const avatarUsuarioLogado = document.createElement('div');
  avatarUsuarioLogado.className = 'avatar';
  avatarUsuarioLogado.textContent = `${'RO'}`;
  containerAdicionarComentario.appendChild(avatarUsuarioLogado);

  const inputComentario = document.createElement('input');
  inputComentario.setAttribute('type', 'text');
  inputComentario.setAttribute('placeholder', 'Adicionar comentário');
  inputComentario.addEventListener('keyup', e => {
    adicionarComentario(e, reclamacaoId);
  });
  containerAdicionarComentario.appendChild(inputComentario);

  const listaComentarios = document.createElement('ul');
  listaComentarios.className = 'comentarios';
  secaoComentarios.appendChild(listaComentarios);

  const comentarios = JSON.parse(localStorage.getItem('@nomeapp:comentarios'));

  if (!comentarios) return;

  comentarios[`reclamacao_${reclamacaoId}`].forEach(comentario => {
    const comentarioLi = document.createElement('li');
    listaComentarios.appendChild(comentarioLi);

    const avatarCriadorComentario = document.createElement('div');
    avatarCriadorComentario.className = 'avatar';
    avatarCriadorComentario.textContent = `${'RO'}`;
    comentarioLi.appendChild(avatarCriadorComentario);

    const conteudoComentario = document.createElement('div');
    conteudoComentario.className = 'conteudo-comentario';
    comentarioLi.appendChild(conteudoComentario);

    const header = document.createElement('header');
    conteudoComentario.appendChild(header);

    const nome = document.createElement('h4');
    nome.textContent = `${comentario.nome_usuario}`;
    header.appendChild(nome);

    const profissao = document.createElement('span');
    profissao.className = 'profissao';
    profissao.textContent = `${comentario.profissao}`;
    header.appendChild(profissao);

    const separador = document.createElement('span');
    separador.className = 'separador';
    separador.innerHTML = '&#8226;';
    header.appendChild(separador);

    const bairro = document.createElement('span');
    bairro.className = 'bairro';
    bairro.textContent = `${comentario.bairro}`;
    header.appendChild(bairro);

    const texto = document.createElement('p');
    texto.textContent = `${comentario.texto}`;
    conteudoComentario.appendChild(texto);
  });
}
