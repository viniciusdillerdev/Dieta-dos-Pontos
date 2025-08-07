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

const tabelaVerduras = document.getElementById("tabela-verduras");
verduras.forEach((verdura) => {
  const row = `
      <tr>
        <td>${verdura.nome}</td>
        <td>${verdura.qtd}</td>
        <td>${verdura.pontos}</td>
        <td><button onclick="adicionarPontos(${verdura.pontos})">+</button></td>
      </tr>`;
  tabelaVerduras.innerHTML += row;
});

const tabelaCarnes = document.getElementById("tabela-carnes");
carnes.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaCarnes.innerHTML += row;
});

const tabelaPeixes = document.getElementById("tabela-peixes");
peixes.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaPeixes.innerHTML += row;
});

const tabelaMassas = document.getElementById("tabela-massas");
massas.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaMassas.innerHTML += row;
});

const tabelaGraos = document.getElementById("tabela-graos");
graosCereaisRaizes.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaGraos.innerHTML += row;
});

const tabelaFrutas = document.getElementById("tabela-frutas");
frutas.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaFrutas.innerHTML += row;
});

const tabelaGorduras = document.getElementById("tabela-gorduras");
gordurasECastanhas.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaGorduras.innerHTML += row;
});

const tabelaPaes = document.getElementById("tabela-paes");
paesEBiscoitos.forEach((item) => {
  const row = ` 
    <tr>
      <td>${item.nome}</td> 
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaPaes.innerHTML += row;
});

const tabelaLaticinios = document.getElementById("tabela-laticinios");
laticiniosEOvo.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaLaticinios.innerHTML += row;
});

const tabelaBebidas = document.getElementById("tabela-bebidas");
bebidas.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaBebidas.innerHTML += row;
});

const tabelaDoces = document.getElementById("tabela-doces");
docesESorvetes.forEach((item) => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.qtd}</td>
      <td>${item.pontos}</td>
      <td><button onclick="adicionarPontos(${item.pontos})">+</button></td>
    </tr>`;
  tabelaDoces.innerHTML += row;
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

// FUNÇÃO CORRIGIDA
function toggleTabelaSopas() {
  const tabelaContainer = document.getElementById("tabela-sopas-container");
  const btn = document.getElementById("toggle-tabela-btn");
  if (tabelaContainer.style.display === "none") {
    (tabelaContainer.style.display = ""), (btn.style.backgroundColor = "blue");
    btn.innerText = "Ocultar tabela de Sopas e Cremes";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Sopas e Cremes";
  }
}

function toggleTabelaMolhos() {
  const tabelaContainer = document.getElementById("tabela-molhos-container");
  const btn = document.getElementById("toggle-tabela-molhos-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Molhos e Patês";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
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
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Salgadinhos";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Salgadinhos";
  }
}

function toggleTabelaVerduras() {
  const tabelaContainer = document.getElementById("tabela-verduras-container");
  const btn = document.getElementById("toggle-tabela-verduras-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Verduras e Legumes";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Verduras e Legumes";
  }
}

function toggleTabelaCarnes() {
  const tabelaContainer = document.getElementById("tabela-carnes-container");
  const btn = document.getElementById("toggle-tabela-carnes-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Carnes, Aves e Frios";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Carnes, Aves e Frios";
  }
}

function toggleTabelaPeixes() {
  const tabelaContainer = document.getElementById("tabela-peixes-container");
  const btn = document.getElementById("toggle-tabela-peixes-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Peixes e Frutos do Mar";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Peixes e Frutos do Mar";
  }
}

function toggleTabelaMassas() {
  const tabelaContainer = document.getElementById("tabela-massas-container");
  const btn = document.getElementById("toggle-tabela-massas-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Massas, Pizzas, Tortas e Sanduíches";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Massas, Pizzas, Tortas e Sanduíches";
  }
}

function toggleTabelaGraos() {
  const tabelaContainer = document.getElementById("tabela-graos-container");
  const btn = document.getElementById("toggle-tabela-graos-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Grãos, Cereais e Raízes";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Grãos, Cereais e Raízes";
  }
}

function toggleTabelaFrutas() {
  const tabelaContainer = document.getElementById("tabela-frutas-container");
  const btn = document.getElementById("toggle-tabela-frutas-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Frutas";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Frutas";
  }
}

function toggleTabelaGorduras() {
  const tabelaContainer = document.getElementById("tabela-gorduras-container");
  const btn = document.getElementById("toggle-tabela-gorduras-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Gorduras e Castanhas";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Gorduras e Castanhas";
  }
}

function toggleTabelaPaes() {
  const tabelaContainer = document.getElementById("tabela-paes-container");
  const btn = document.getElementById("toggle-tabela-paes-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Pães e Biscoitos";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Pães e Biscoitos";
  }
}

// FUNÇÃO CORRIGIDA
function toggleTabelaLaticinios() {
  const tabelaContainer = document.getElementById(
    "tabela-laticinios-container"
  );
  const btn = document.getElementById("toggle-tabela-laticinios-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Laticínios e Ovos";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Laticínios e Ovos";
  }
}

function toggleTabelaBebidas() {
  const tabelaContainer = document.getElementById("tabela-bebidas-container");
  const btn = document.getElementById("toggle-tabela-bebidas-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Bebidas";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Bebidas";
  }
}

function toggleTabelaDoces() {
  const tabelaContainer = document.getElementById("tabela-doces-container");
  const btn = document.getElementById("toggle-tabela-doces-btn");
  if (tabelaContainer.style.display === "none") {
    tabelaContainer.style.display = "";
    btn.style.backgroundColor = "blue";
    btn.innerText = "Ocultar tabela de Doces e Sorvetes";
  } else {
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = "Mostrar tabela de Doces e Sorvetes";
  }
}
