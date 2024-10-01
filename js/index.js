const cardProdutosTemplate = document.querySelector("#cardProduto-template");
const cardlist = document.querySelector(".produto__itens");

//--------------- lista de produtos ----------------------

const produtos = [
  {
    nome: "Caldo de Cana",
    category: "Bebidas",
    preço: "R$ 4,00",
    image: "https://i.ibb.co/Bs081pB/caldo-de-cana.jpg",
  },
  {
    nome: "Caipirinha",
    categoria: "Bebidas",
    preço: "R$ 10,00",
    image: "https://i.ibb.co/DbhdZ2k/caipirinha.jpg",
  },
  {
    nome: "Cachorro-quente",
    categoria: "Lanches",
    preço: "R$ 12,00",
    image: "https://i.ibb.co/nbBwQxX/cachorro-quente.webp",
  },
  {
    nome: "Joelho",
    categoria: "Lanches",
    preço: "R$ 6,00",
    image: "https://i.ibb.co/qpKG0Dv/joelho.webp",
  },
  {
    nome: "Brigadeiro",
    categoria: "Doces",
    preço: "R$ 3,50",
    image: "https://i.ibb.co/HKvKfjy/brigadeiro.jpg",
  },
  {
    nome: "Paçoca",
    categoria: "Doces",
    preço: "R$ 1,00",
    image: "https://i.ibb.co/M5p9MLj/pacoca.jpg",
  },
];

//----- criando cardProduto-----
function createCardProduto(card) {
  //-----copia template cardItem-----
  const cardItem = cardProdutosTemplate.content
    .querySelector(".produto__item")
    .cloneNode(true);

  //---- pegar dados do template -----
  const imageProduto = cardItem.querySelector(".produto__image");
  const preçoProduto = cardItem.querySelector(".produto__preço");
  const nomeProduto = cardItem.querySelector(".produto__nome");
  /* const categoryProduto = cardItem.querySelector(".produto__categoria"); */

  /*   const buttonAddProduto = cardItem.querySelector(".produto__add"); */
  //
  // Popula os dados no card

  imageProduto.setAttribute("src", card.image);
  imageProduto.setAttribute("alt", card.nome);
  nomeProduto.textContent = card.nome;
  preçoProduto.textContent = card.preço;

  return cardItem;
}
//
//
//verifica cada elemento no array e adiciona os cartoes do array ao cartao

produtos.forEach((card) => {
  const newCardItem = createCardProduto(card); // Cria o card para o produto atual
  cardlist.prepend(newCardItem); // Adiciona o novo card ao início da lista
});
//

//----------------- Função para abrir e fechar os popups -----------
//
function openPopup(popup) {
  popup.classList.add("popup__opened");
}

function closePopup(popup) {
  popup.classList.remove("popup__opened");
}

const popupAddProduto = document.querySelector(".popup__new-item");
const buttonAddItem = document.querySelector(".venda__add-item");

buttonAddItem.addEventListener("click", function () {
  openPopup(popupAddProduto);
});

const closePopupAddItem = document.querySelector(".popup__close-cadastro-item");
closePopupAddItem.addEventListener("click", function () {
  closePopup(popupAddProduto);
});

//------------------------- teste de filter ---------------------------

const inputBusca = document.querySelector("#produto-consulta");
const resultadoBusca = document.querySelector("#resultado-busca");
const spanx = document.querySelector("#spanx");
//
//
inputBusca.addEventListener("input", () => {
  const query = inputBusca.value.toLowerCase();
  const resultado = produtos.filter((produto) => {
    return produto.nome.toLowerCase().includes(query);
  });

  resultadoBusca.innerHTML = "produtos encontrados:";
  resultado.forEach((produtos) => {
    const pesquisa = document.createElement("pesquisa");
    pesquisa.textContent = `${produtos.nome} - ${produtos.preço}`;
    resultadoBusca.appendChild(pesquisa);
    spanx.textContent = `${resultado.length}`;
  });
});
