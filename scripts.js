// Lista de filmes: imagem + link
const filmes = [
  {
    titulo: "Soilent Green",
    imagem: "green.jpg",
    link: "https://mega.nz/folder/aXoWlbDZ#WZsBhUWw6RT1rSUiJLta9Q"    
  },
  {
    titulo: "Machuca",
    imagem: "./machuca.jpg",
    link: "https://mega.nz/folder/WOwnXahC#f76XV12918fn3aHn_uX5cw"
  },
  {
    titulo: "ZONA DE INTERESSE",
    imagem: "ZONA.jpeg",
    link: "https://mega.nz/folder/vb5XFK6C#XU3FEZnJ4XUOgh9D0P96CA"
  },
  {
    titulo: "THEY LIVE",
    imagem: "THEYLIVE.jpeg",
    link: "https://mega.nz/folder/fTgWFJIB#yoZdgknGEoav5i5_dMElIg"
  },
  {
    titulo: "OPEN YOUR EYES",
    imagem: "OPYE.jpeg",
    link: "https://mega.nz/folder/qWRFTD4J#SP4ClV5fJnmixYEO9Zx3ww"
  },
  {
    titulo: "MINORITY REPORT",
    imagem: "MINORREP.jpeg",
    link: "https://mega.nz/folder/jCIQVQ7b#mouwgf471JbqYlNW5H61zA"
  },
  {
    titulo: "2067",
    imagem: "2067.jpeg",
    link: "https://mega.nz/folder/DXIVmaRK#jEJ8EVAjLUIRhUYR3dkDYg"
  },
  {
    titulo: "Y TU MAMA TAMBIEN ",
    imagem: "TUMAMA.jpeg",
    link: "https://mega.nz/folder/zX5BkZ5Y#u9R7SXG1Cq8quhE__HfXzQ"
  }
];

async function carregarFilmes() {
  const resposta = await fetch("./filmes.txt");
  const texto = await resposta.text();

  // divide por linha
  const linhas = texto.trim().split("\n");

  const filmes = linhas.map(linha => {
    const partes = linha.split(",");
    return {
      titulo: partes[0],
      imagem: partes[1],
      link: partes[2]
    };
  });

  return filmes;
}

// Função modular para criar um card de filme
function criarCard(filme){
  const card = document.createElement("div");
  card.className = "filme";

  const img = document.createElement("img");
  img.src = filme.imagem;

  const titulo = document.createElement("div");
  titulo.className = "titulo";
  titulo.textContent = filme.titulo;

  card.appendChild(img);
  card.appendChild(titulo);

  card.addEventListener("click", () => abrirFilme(filme.link));

  return card;
}

// Função para abrir o link do mega
function abrirFilme(link){
  window.open(link, "_blank");
}

// Função para renderizar catálogo
async function montarCatalogo() {
  const container = document.getElementById("catalogo");

  const filmes = await carregarFilmes();

  filmes.forEach(filme => {
    container.appendChild(criarCard(filme));
  });
}

// Inicialização
montarCatalogo();


