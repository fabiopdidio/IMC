function calcularIMC() {
    // cria função para calcular o IMC
    var peso = parseFloat(document.getElementById("peso").value); // pega informação de peso digitada pelo usuário
    var altura = parseFloat(document.getElementById("altura").value); // pega informação de altura digitada pelo usuário
    var imc = peso / (altura * altura); // utiliza fórmula para calcular IMC
  
    sessionStorage.setItem("imc", imc.toFixed(1)); // armazena o resultado do IMC e define apenas um número após a vírgula
  }
  
  document
    .getElementById("calcularButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      calcularIMC(); // Chama a função calcularIMC()
      window.location.href = "./resposta_imc.html"; // Redireciona para a página resposta_imc.html
    });
  