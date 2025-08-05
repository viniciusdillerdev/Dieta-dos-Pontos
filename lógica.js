const alimentos = [
  { nome: "Caldo verde", qtd: "1 concha média", pontos: 21 },
  { nome: "Canja", qtd: "1 concha média", pontos: 30 },
  { nome: "Creme de cebola", qtd: "1 concha média", pontos: 50 },
  { nome: "Creme de espinafre", qtd: "1 concha média", pontos: 46 },
  {
    nome: "Creme de legumes batidos",
    qtd: "2 conchas médias",
    pontos: 50,
  },
  { nome: "Sopa de ervilha", qtd: "1 concha média", pontos: 50 },
  {
    nome: "Sopa de feijão com macarrão",
    qtd: "1 concha média",
    pontos: 50,
  },
  {
    nome: "Sopa de vegetais em pedaço",
    qtd: "2 conchas médias",
    pontos: 24,
  },
  { nome: "Missoshiro", qtd: "1 concha média", pontos: 17 },
];

const molhos = [
  { nome: "Babaganuche", qtd: "1 col. (sopa)", pontos: 10 },
  { nome: "Coalhada fresca", qtd: "1 copo (200 ml)", pontos: 40 },
  { nome: "Coalhada seca", qtd: "1 col. (sopa)", pontos: 15 },
  { nome: "Homus", qtd: "1 col. (sopa)", pontos: 15 },
  { nome: "Ketchup", qtd: "1 col. (sopa)", pontos: 6 },
  { nome: "Maionese", qtd: "1 col. (sopa)", pontos: 35 },
  { nome: "Maionese light", qtd: "1 col. (sopa)", pontos: 18 },
  { nome: "Molho à bolonhesa", qtd: "1 col. (sopa)", pontos: 12 },
  { nome: "Molho branco", qtd: "1 col. (sopa)", pontos: 20 },
  { nome: "Molho inglês", qtd: "1 col. (sopa)", pontos: 2 },
  { nome: "Molho rosê", qtd: "1 col. (sopa)", pontos: 26 },
  { nome: "Molho tártaro", qtd: "1 col. (sopa)", pontos: 30 },
  { nome: "Molho de iogurte", qtd: "1 col. (sopa)", pontos: 8 },
  { nome: "Mostarda", qtd: "1 col. (sopa)", pontos: 5 },
];

const salgadinhos = [
  { nome: "Barra de cereais light", qtd: "1 unidade", pontos: 25 },
  { nome: "Batata chips", qtd: "1 porção (80 g)", pontos: 118 },
  { nome: "Batata palha", qtd: "1 col. (sopa)", pontos: 20 },
  { nome: "Biscoito de polvilho", qtd: "1 pacote (50g)", pontos: 60 },
  { nome: "Ovinho de amendoim", qtd: "1 pacote (200g)", pontos: 250 },
  { nome: "Pipoca de microondas", qtd: "1 saco médio (50g)", pontos: 55 },
  { nome: "Salgadinho assado", qtd: "1 unidade pequena", pontos: 20 },
  { nome: "Salgadinho frito", qtd: "1 unidade pequena", pontos: 30 },
  { nome: "Salgadinho empanado", qtd: "1 unidade pequena", pontos: 40 },
  { nome: "Salgadinho de pacote", qtd: "1 pacote médio", pontos: 140 },
];

let total = Number(localStorage.getItem("pontos")) || 0;
const totalSpan = document.getElementById("total");
totalSpan.innerText = total;

const tabela = document.getElementById("tabela-alimentos");

alimentos.forEach((alimento) => {
  const row = `
        <tr>
          <td>${alimento.nome}</td>
          <td>${alimento.qtd}</td>
          <td>${alimento.pontos}</td>
          <td><button onclick="adicionarPontos(${alimento.pontos})">+</button></td>
        </tr>`;
  tabela.innerHTML += row;
});

const tabelaMolhos = document.getElementById("tabela-molhos");
molhos.forEach((molho) => {
  const row = `
      <tr>
        <td>${molho.nome}</td>
        <td>${molho.qtd}</td>
        <td>${molho.pontos}</td>
        <td><button onclick="adicionarPontos(${molho.pontos})">+</button></td>
      </tr>`;
  tabelaMolhos.innerHTML += row;
});

const tabelaSalgadinhos = document.getElementById("tabela-salgadinhos");
salgadinhos.forEach((item) => {
  const row = `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>${item.pontos}</td>
        <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
      </tr>`;
  tabelaSalgadinhos.innerHTML += row;
});

function adicionarPontos(valor) {
  total += valor;
  totalSpan.innerText = total;
  localStorage.setItem("pontos", total);
}

function resetar() {
  total = 0;
  totalSpan.innerText = total;
  localStorage.removeItem("pontos");
}

function toggleTabela() {
  const tabelaContainer = document.getElementById("tabela-container");
  const btn = document.getElementById("toggle-tabela-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.innerText = "Ocultar tabela de Sopas e Cremes";
  } else {
    tabelaContainer.style.display = "none";
    btn.innerText = "Mostrar tabela de Sopas e Cremes";
  }
}

function toggleTabelaMolhos() {
  const tabelaContainer = document.getElementById("tabela-molhos-container");
  const btn = document.getElementById("toggle-tabela-molhos-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.innerText = "Ocultar tabela de Molhos e Patês";
  } else {
    tabelaContainer.style.display = "none";
    btn.innerText = "Mostrar tabela de Molhos e Patês";
  }
}

function toggleTabelaSalgadinhos() {
  const tabelaContainer = document.getElementById(
    "tabela-salgadinhos-container"
  );
  const btn = document.getElementById("toggle-tabela-salgadinhos-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.innerText = "Ocultar tabela de Salgadinhos";
  } else {
    tabelaContainer.style.display = "none";
    btn.innerText = "Mostrar tabela de Salgadinhos";
  }
}
