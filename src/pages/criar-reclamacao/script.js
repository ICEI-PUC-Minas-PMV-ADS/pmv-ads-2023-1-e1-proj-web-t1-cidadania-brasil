import { buscarUsuarioLogado } from '../../utils/buscarUsuarioLogado';
import { criarIniciaisNomeUsuario } from '../../utils/criarIniciaisNomeUsuario';

const dadosUsuarioLogado = buscarUsuarioLogado();

const formularioReclamacao = document.getElementById('formulario-reclamacao');
const inputFile = document.getElementById('anexar-imagem');
const labelFile = document.getElementById('label-anexar-imagem');
const removerAnexo = document.getElementById('remover-anexo');

formularioReclamacao.addEventListener('submit', cadastrarReclamacao);
removerAnexo.addEventListener('click', removerImagemAnexada);
inputFile.addEventListener('change', imagemAnexada);

function inserirInformacoesUsuarioLogado() {
  document.getElementById('avatar-usuario').textContent =
    criarIniciaisNomeUsuario(dadosUsuarioLogado.nome);
  document.getElementById(
    'nome-usuario'
  ).textContent = `${dadosUsuarioLogado.nome} ${dadosUsuarioLogado.sobrenome}`;
  document.getElementById('profissao-usuario').textContent =
    dadosUsuarioLogado.profissao;
}

async function cadastrarReclamacao(e) {
  e.preventDefault();

  const categoria = document.getElementById('categoria-reclamacao').value;
  const bairro = document.getElementById('bairro-reclamacao').value;
  const textoReclamacao = document.getElementById('descricao-reclamacao').value;
  const imagem = await converterImagemParaBase64();

  const reclamacoes = JSON.parse(localStorage.getItem('@cidadania-brasil:reclamacoes'));

  const novaReclamacao = {
    id: reclamacoes?.length || 0,
    categoria,
    bairro,
    texto_reclamacao: textoReclamacao,
    imagem,
    curtidas: [],
    comentarios: [],
    data: new Date(),
    usuario: {
      ...dadosUsuarioLogado,
    },
  };

  localStorage.setItem(
    '@cidadania-brasil:reclamacoes',
    JSON.stringify(
      reclamacoes ? [...reclamacoes, novaReclamacao] : [novaReclamacao]
    )
  );

  window.location.href = '../feed-de-reclamacoes/index.html';
}

async function converterImagemParaBase64() {
  let imagemBase64 = null;

  const gerarBase64 = new Promise((resolve, reject) => {
    if (inputFile.files.length) {
      const imagem = inputFile.files[0];

      const lerImagem = new FileReader();

      lerImagem.onload = e => {
        const urlBase64 = e.target.result;
        resolve(urlBase64);
      };

      lerImagem.readAsDataURL(imagem);
    } else {
      reject(null);
    }
  });

  await gerarBase64
    .then(urlBase64 => {
      imagemBase64 = urlBase64;
    })
    .catch(erro => {
      imagemBase64 = erro;
    });

  return imagemBase64;
}

function imagemAnexada() {
  labelFile.className = 'ativo';
  removerAnexo.classList.remove('ocultar');
}

function removerImagemAnexada() {
  inputFile.value = '';
  labelFile.classList.remove('ativo');
  removerAnexo.className = 'ocultar';
}

inserirInformacoesUsuarioLogado();
