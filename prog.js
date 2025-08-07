let total = Number(localStorage.getItem("pontos")) || 0;
const totalSpan = document.getElementById("total");
totalSpan.innerText = total;

// Armazena a contagem de cada alimento, carregando do localStorage se existir
const alimentosSelecionados =
  JSON.parse(localStorage.getItem("alimentosSelecionados")) || {};

function criarLinha(item, tabelaId) {
  const id = `${tabelaId}-${item.nome.replace(/\s+/g, "-")}`;
  // Se o item não estiver no nosso objeto de contagem, inicializa com 0
  if (!alimentosSelecionados[id]) {
    alimentosSelecionados[id] = 0;
  }
  // Gera o HTML da linha da tabela com a nova estrutura de ações
  return `
        <tr>
          <td>${item.nome}</td>
          <td>${item.qtd}</td>
          <td>${item.pontos}</td>
          <td class="actions-cell">
            <button class="remove-btn" onclick="removerPontos(${item.pontos}, '${id}')">-</button>
            <span id="${id}">${alimentosSelecionados[id]}</span>
            <button onclick="adicionarPontos(${item.pontos}, '${id}')">+</button>
          </td>
        </tr>`;
}

function preencherTabela(lista, tabelaId) {
  const tabela = document.getElementById(tabelaId);
  tabela.innerHTML = ""; // Limpa a tabela antes de preencher
  lista.forEach((item) => {
    tabela.innerHTML += criarLinha(item, tabelaId);
  });
}

// Preenche todas as tabelas na inicialização
preencherTabela(alimentos, "tabela-alimentos");
preencherTabela(molhos, "tabela-molhos");
preencherTabela(salgadinhos, "tabela-salgadinhos");
preencherTabela(verduras, "tabela-verduras");
preencherTabela(carnes, "tabela-carnes");
preencherTabela(peixes, "tabela-peixes");
preencherTabela(massas, "tabela-massas");
preencherTabela(graosCereaisRaizes, "tabela-graos");
preencherTabela(frutas, "tabela-frutas");
preencherTabela(gordurasECastanhas, "tabela-gorduras");
preencherTabela(paesEBiscoitos, "tabela-paes");
preencherTabela(laticiniosEOvo, "tabela-laticinios");
preencherTabela(bebidas, "tabela-bebidas");
preencherTabela(docesESorvetes, "tabela-doces");

function adicionarPontos(valor, id) {
  total += valor;
  alimentosSelecionados[id]++;
  atualizarTudo();
}

function removerPontos(valor, id) {
  // Só remove se a quantidade for maior que 0
  if (alimentosSelecionados[id] > 0) {
    total -= valor;
    alimentosSelecionados[id]--;
    atualizarTudo();
  }
}

function atualizarTudo() {
  // Atualiza o total de pontos na tela
  totalSpan.innerText = total;
  // Salva o total e a contagem de itens no localStorage
  localStorage.setItem("pontos", total);
  localStorage.setItem(
    "alimentosSelecionados",
    JSON.stringify(alimentosSelecionados)
  );

  // Atualiza todos os contadores na tela
  for (const id in alimentosSelecionados) {
    const contadorSpan = document.getElementById(id);
    if (contadorSpan) {
      contadorSpan.innerText = alimentosSelecionados[id];
    }
  }
}

function resetar() {
  total = 0;
  // Zera a contagem de todos os alimentos
  for (const id in alimentosSelecionados) {
    alimentosSelecionados[id] = 0;
  }
  // Remove os dados do localStorage e atualiza a tela
  localStorage.removeItem("pontos");
  localStorage.removeItem("alimentosSelecionados");
  atualizarTudo();
}

// --- FUNÇÃO CORRIGIDA ---
function toggleTabela(containerId, btnId, nomeTabela) {
  const tabelaContainer = document.getElementById(containerId);
  const btn = document.getElementById(btnId);

  // Verifica se a tabela está escondida
  if (
    tabelaContainer.style.display === "none" ||
    tabelaContainer.style.display === ""
  ) {
    // AQUI ESTÁ A CORREÇÃO: define explicitamente como 'block' para exibir
    tabelaContainer.style.display = "block";
    btn.style.backgroundColor = "blue";
    btn.innerText = `Ocultar tabela de ${nomeTabela}`;
  } else {
    // Esconde a tabela
    tabelaContainer.style.display = "none";
    btn.style.backgroundColor = "var(--secondary-color)";
    btn.innerText = `Mostrar tabela de ${nomeTabela}`;
  }
}

// Chamadas das funções de toggle (sem alteração)
function toggleTabelaSopas() {
  toggleTabela("tabela-sopas-container", "toggle-tabela-btn", "Sopas e Cremes");
}
function toggleTabelaMolhos() {
  toggleTabela(
    "tabela-molhos-container",
    "toggle-tabela-molhos-btn",
    "Molhos e Patês"
  );
}
function toggleTabelaSalgadinhos() {
  toggleTabela(
    "tabela-salgadinhos-container",
    "toggle-tabela-salgadinhos-btn",
    "Salgadinhos"
  );
}
function toggleTabelaVerduras() {
  toggleTabela(
    "tabela-verduras-container",
    "toggle-tabela-verduras-btn",
    "Verduras e Legumes"
  );
}
function toggleTabelaCarnes() {
  toggleTabela(
    "tabela-carnes-container",
    "toggle-tabela-carnes-btn",
    "Carnes, Aves e Frios"
  );
}
function toggleTabelaPeixes() {
  toggleTabela(
    "tabela-peixes-container",
    "toggle-tabela-peixes-btn",
    "Peixes e Frutos do Mar"
  );
}
function toggleTabelaMassas() {
  toggleTabela(
    "tabela-massas-container",
    "toggle-tabela-massas-btn",
    "Massas, Pizzas, Tortas e Sanduíches"
  );
}
function toggleTabelaGraos() {
  toggleTabela(
    "tabela-graos-container",
    "toggle-tabela-graos-btn",
    "Grãos, Cereais e Raízes"
  );
}
function toggleTabelaFrutas() {
  toggleTabela("tabela-frutas-container", "toggle-tabela-frutas-btn", "Frutas");
}
function toggleTabelaGorduras() {
  toggleTabela(
    "tabela-gorduras-container",
    "toggle-tabela-gorduras-btn",
    "Gorduras e Castanhas"
  );
}
function toggleTabelaPaes() {
  toggleTabela(
    "tabela-paes-container",
    "toggle-tabela-paes-btn",
    "Pães e Biscoitos"
  );
}
function toggleTabelaLaticinios() {
  toggleTabela(
    "tabela-laticinios-container",
    "toggle-tabela-laticinios-btn",
    "Laticínios e Ovos"
  );
}
function toggleTabelaBebidas() {
  toggleTabela(
    "tabela-bebidas-container",
    "toggle-tabela-bebidas-btn",
    "Bebidas"
  );
}
function toggleTabelaDoces() {
  toggleTabela(
    "tabela-doces-container",
    "toggle-tabela-doces-btn",
    "Doces e Sorvetes"
  );
}
