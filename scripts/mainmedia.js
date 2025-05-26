fetch("https://script.google.com/macros/s/AKfycbw8_NI4XQjrAnvgJ8XBpP6MqL1zjlmBLTctPqTWiZi8eABk2qtHheUrUFZWRWSyhzHI/exec")
  .then(res => res.json())
  .then(dados => {
    document.getElementById("medias").innerHTML = `
      <p>Temperatura: ${dados.coluna_B} C°</p>
      <p>Umidade: ${dados.coluna_C} %</p>
      <p>Co2: ${dados.coluna_D} ppm</p>
    `;
  })
  .catch(err => {
    console.error("Erro ao buscar médias:", err);
  });
