const url = "https://script.google.com/macros/s/AKfycbwu4wMoN-NJn18IOA88MovQluToZtDZbaTNVuAodLDqB5lZq5FabDx5Bu58c3xDZxrp/exec"; // Substitua pela sua URL final
let dadosOriginais = [];
let dadosFiltrados = [];

function exibirTabela(dados) {
  const head = document.getElementById("tabela-head");
  const body = document.getElementById("tabela-body");

  head.innerHTML = "";
  body.innerHTML = "";

  if (dados.length === 0) return;

  // Cabeçalho
  const headerRow = document.createElement("tr");
  dados[0].forEach(celula => {
    const th = document.createElement("th");
    th.textContent = celula;
    headerRow.appendChild(th);
  });
  head.appendChild(headerRow);

  // Linhas
  for (let i = 1; i < dados.length; i++) {
    const row = document.createElement("tr");
    dados[i].forEach(celula => {
      const td = document.createElement("td");
      td.textContent = celula;
      row.appendChild(td);
    });
    body.appendChild(row);
  }
}

fetch(url)
  .then(res => res.json())
  .then(dados => {
    dadosOriginais = dados;
    exibirTabela(dados);
  })
  .catch(erro => console.error("Erro:", erro));

document.getElementById("filtro").addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  const filtrados = [dadosOriginais[0]]; // Mantém cabeçalho

  for (let i = 1; i < dadosOriginais.length; i++) {
    if (dadosOriginais[i].some(cel => String(cel).toLowerCase().includes(termo))) {
      filtrados.push(dadosOriginais[i]);
    }
  }

  exibirTabela(filtrados);
});