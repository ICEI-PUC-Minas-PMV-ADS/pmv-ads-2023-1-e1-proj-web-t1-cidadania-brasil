// FIXME: corrigir o nome da key do local storage pelo nome da aplicacao
// FIXME: id_usuario, nome_usuario, profissao devem ser substituidos pelos dados que virão
// do usuário autenticado. E também está faltando o ID da reclamação.

const formularioReclamacao = document.getElementById('formulario-reclamacao');
const inputFile = document.getElementById('anexar-imagem');
const labelFile = document.getElementById('label-anexar-imagem');
const removerAnexo = document.getElementById('remover-anexo');

formularioReclamacao.addEventListener('submit', cadastrarReclamacao);
removerAnexo.addEventListener('click', removerImagemAnexada);
inputFile.addEventListener('change', imagemAnexada);

async function cadastrarReclamacao(e) {
  e.preventDefault();

  const categoria = document.getElementById('categoria-reclamacao').value;
  const bairro = document.getElementById('bairro-reclamacao').value;
  const textoReclamacao = document.getElementById('descricao-reclamacao').value;
  const imagem = await converterImagemParaBase64();

  const novaReclamacao = {
    id_usuario: 1,
    nome_usuario: 'João Victor',
    profissao: 'Professor',
    categoria,
    bairro,
    texto_reclamacao: textoReclamacao,
    imagem,
    data: new Date(),
    curtidas: 0,
    comentarios: 0,
  };

  const reclamacoes = JSON.parse(localStorage.getItem('@nomeapp:reclamacoes'));

  localStorage.setItem(
    '@nomeapp:reclamacoes',
    JSON.stringify(
      reclamacoes ? [...reclamacoes, novaReclamacao] : [novaReclamacao]
    )
  );

  formularioReclamacao.reset();
  removerImagemAnexada();
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
