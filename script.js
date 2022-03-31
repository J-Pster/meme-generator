// Definindo atalhos de comandos
const query = document.querySelector.bind(document);

// Definindo variáveis globais
const inputDeTexto = query('#text-input');
const inputDeImagem = query('#meme-insert');

const memeTexto = query('#meme-text');
const caixaImagem = query('#meme-image');
const memeContainer = query('#meme-image-container');

const botaoFire = query('#fire');
const botaoWater = query('#water');
const botaoEarth = query('#earth');

const meme1 = query('#meme-1');
const meme2 = query('#meme-2');
const meme3 = query('#meme-3');
const meme4 = query('#meme-4');

// Colocando o texto no meme
function colocarTexto() {
  const textoDoInput = inputDeTexto.value;
  memeTexto.innerText = textoDoInput;
}

inputDeTexto.addEventListener('keyup', colocarTexto);

// Colocando a imagem no meme
function colocarImagem() {
  console.log(inputDeImagem.value);
  caixaImagem.src = inputDeImagem.value;
}

inputDeImagem.addEventListener('change', colocarImagem);

// Alterando a borda para as dos botões
function removerBordas() {
  memeContainer.classList.remove('padrao');
  memeContainer.classList.remove('fire');
  memeContainer.classList.remove('water');
  memeContainer.classList.remove('earth');
}

function alterarBorda(event) {
  const origem = event.target;
  removerBordas();
  console.log(origem.id);

  if (origem.id === 'fire') {
    memeContainer.classList.add('fire');
  }
  if (origem.id === 'water') {
    memeContainer.classList.add('water');
  }
  if (origem.id === 'earth') {
    memeContainer.classList.add('earth');
  }

  console.log(memeContainer);
}

botaoFire.addEventListener('click', alterarBorda);
botaoWater.addEventListener('click', alterarBorda);
botaoEarth.addEventListener('click', alterarBorda);

// Colocando imagens pre prontas
function tratandoUrl(url) {
  let urlRetorno = url.replace('u', '');
  urlRetorno = urlRetorno.replace('r', '');
  urlRetorno = urlRetorno.replace('l', '');
  urlRetorno = urlRetorno.replace('(', '');
  urlRetorno = urlRetorno.replace('"', '');
  urlRetorno = urlRetorno.replace('"', '');
  urlRetorno = urlRetorno.replace(')', '');

  return urlRetorno;
}

function colocarImagemPronta(event) {
  const origem = event.target;
  const styleObj = getComputedStyle(origem);
  const urlNova = tratandoUrl(styleObj.backgroundImage);
  caixaImagem.src = urlNova;
}

meme1.addEventListener('click', colocarImagemPronta);
meme2.addEventListener('click', colocarImagemPronta);
meme3.addEventListener('click', colocarImagemPronta);
meme4.addEventListener('click', colocarImagemPronta);
