
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
  img.src = "./img/" + filme.imagem;

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


