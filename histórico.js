document.addEventListener("DOMContentLoaded", () => {
  const btnSalvar = document.getElementById("salvar-dia-btn");
  const listaHistorico = document.getElementById("lista-historico");

  // Função para remover um dia específico do histórico
  const removerDia = (index) => {
    // Confirmação para evitar exclusão acidental
    const confirmar = confirm("Tem certeza que deseja remover este registro?");
    if (!confirmar) {
      return; // Se o usuário cancelar, a função para aqui.
    }

    const historico = JSON.parse(localStorage.getItem("historicoPontos")) || [];

    // Remove o item do array na posição (index) especificada.
    historico.splice(index, 1);

    // Salva o array modificado de volta no localStorage.
    localStorage.setItem("historicoPontos", JSON.stringify(historico));

    // Recarrega a lista do histórico na tela para refletir a remoção.
    carregarHistorico();
  };

  const carregarHistorico = () => {
    const historico = JSON.parse(localStorage.getItem("historicoPontos")) || [];
    listaHistorico.innerHTML = "";

    historico.forEach((item, index) => {
      const li = document.createElement("li");

      // Cria um span para o texto, para separá-lo do botão.
      const textoSpan = document.createElement("span");
      textoSpan.textContent = `${item.data}: ${item.pontos} pontos`;

      // Cria o botão de remover.
      const btnRemover = document.createElement("button");
      btnRemover.textContent = "X"; // Texto do botão.
      btnRemover.className = "remove-historico-btn"; // Classe para o estilo CSS.
      // Adiciona um evento de clique que chama a função removerDia, passando o index deste item.
      btnRemover.onclick = () => removerDia(index);

      // Adiciona o texto e o botão ao item da lista (<li>).
      li.appendChild(textoSpan);
      li.appendChild(btnRemover);

      listaHistorico.appendChild(li);
    });
  };

  const salvarDia = () => {
    const totalPontosHoje = document.getElementById("total").textContent;
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const historico = JSON.parse(localStorage.getItem("historicoPontos")) || [];
    const novoRegistro = {
      data: dataFormatada,
      pontos: totalPontosHoje,
    };

    // --- ALTERAÇÃO PRINCIPAL AQUI ---
    // Em vez de .push(), usamos .unshift() para adicionar no início da lista.
    historico.unshift(novoRegistro);

    localStorage.setItem("historicoPontos", JSON.stringify(historico));
    alert(
      `Dia ${dataFormatada} salvo com ${totalPontosHoje} pontos!\nDeslize para baixo para ver o histórico.`
    );
    carregarHistorico();
    if (typeof resetar === "function") {
      resetar();
    }
  };

  if (btnSalvar) {
    btnSalvar.addEventListener("click", salvarDia);
  }
  carregarHistorico();
});
