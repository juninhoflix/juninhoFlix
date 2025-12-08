// Lista de filmes: imagem + link
const filmes = [
  {
    titulo: "Soilent Green",
    imagem: "/green.jpg",
    link: "https://mega.nz/file/rBcAmaZQ#7Uqs3_JqPIfWN4jiXu1vm-0_iUBqg5yBXFPCArUp-5I"
  },
  {
    titulo: "1984",
    imagem: "1984.jpeg",
    link: "https://mega.nz/folder/KNFHTQxZ#D72alxC3QYkMc4v1XfRZjQ"
  },
  {
    titulo: "Machuca",
    imagem: "./machuca.jpg",
    link: "https://mega.nz/folder/KNFHTQxZ#D72alxC3QYkMc4v1XfRZjQ"
  }
];

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
function montarCatalogo(){
  const container = document.getElementById("catalogo");
  filmes.forEach(filme => container.appendChild(criarCard(filme)));
}

// Inicialização
montarCatalogo();

