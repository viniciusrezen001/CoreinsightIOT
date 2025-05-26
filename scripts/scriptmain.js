const url = "https://script.google.com/macros/s/AKfycbzeUOxknnnTCk42rqdpqHBVHJSVy7Xc6_cRY08DmpDqxwKTNW4ufvWBh4MXRVA_KI7c/exec"; // troque pelo seu

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const head = document.getElementById("tabela-head");
        const body = document.getElementById("tabela-body");

        if (data.length === 0) return;

        // Cria cabeçalho da tabela (primeira linha)
        const headerRow = document.createElement("tr");
        data[0].forEach(cell => {
          const th = document.createElement("th");
          th.textContent = cell;
          headerRow.appendChild(th);
        });
        head.appendChild(headerRow);

        // Cria linhas com os dados
        for (let i = 1; i < data.length; i++) {
          const row = document.createElement("tr");
          data[i].forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            row.appendChild(td);
          });
          body.appendChild(row);
        }
      })
      .catch(err => console.error("Erro ao buscar dados:", err));