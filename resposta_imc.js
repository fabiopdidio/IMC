var imc = parseFloat(sessionStorage.getItem("imc")); // Puxa o valor do IMC armazenado e converte para um número flutuante

// Cria funcao para mostrar o resultado do imc
window.onload = function () {
  var resultadoElement = document.getElementById("resultado"); // Obtém o elemento HTML com o ID "resultado"
  if (!isNaN(imc)) {
    // Verifica se o valor do IMC é válido
    resultadoElement.textContent = "IMC " + imc.toFixed(1); // Define mensagem padrão e mostra resposta com um número após a vírgula

    if (imc < 18.5) {
      resultadoElement.textContent += " - Abaixo do peso"; // Mostra a mensagem "Abaixo do peso"
      resultadoElement.style.backgroundColor = "blue"; // Define a cor de fundo como azul
      exibirImagem("imagens/imc_abaixo.png"); // Exibe a imagem correspondente ao resultado
    } else if (imc <= 24.9) {
      resultadoElement.textContent += " - Peso ideal"; // Mostra a mensagem "Peso ideal"
      resultadoElement.style.backgroundColor = "green"; // Define a cor de fundo como verde
      exibirImagem("imagens/imc_normal.png"); // Exibe a imagem correspondente ao resultado
    } else if (imc <= 29.9) {
      resultadoElement.textContent += " - Sobrepeso"; // Mostra a mensagem "Sobrepeso"
      resultadoElement.style.backgroundColor = "darkgoldenrod"; // Define a cor de fundo como amarelo escuro
      exibirImagem("imagens/imc_sobrepeso.png"); // Exibe a imagem correspondente ao resultado
    } else {
      resultadoElement.textContent += " - Obesidade"; // Mostra a mensagem "Obesidade"
      resultadoElement.style.backgroundColor = "red"; // Define a cor de fundo como vermelho
      exibirImagem("imagens/imc_obesidade.png"); // Exibe a imagem correspondente ao resultado
    }

    resultadoElement.style.padding = "10px"; // Define espaçamento interno
    resultadoElement.style.borderRadius = "10px"; // Deixa cantos do background arredondados
    resultadoElement.style.color = "white"; // Define a cor da letra como branco
  } else {
    resultadoElement.textContent = "Ocorreu um erro ao calcular o IMC."; // Mostra mensagem de erro
    resultadoElement.style.backgroundColor = "grey"; // Define a cor de fundo como cinza claro
    resultadoElement.style.color = "white"; // Define a cor da letra como branco
    resultadoElement.style.padding = "10px"; // Define um espaçamento interno
    resultadoElement.style.borderRadius = "10px"; // Deixa cantos do background arredondados
  }

  // Cria funcao para mostrar a imagem correspondente ao resultado
  function exibirImagem(imagemSrc) {
    var imagemElement = document.createElement("img"); // Cria uma var para o elemento de imagem
    imagemElement.src = imagemSrc; // Define o atributo src da imagem com o caminho da imagem correspondente
    imagemElement.style.width = "40%"; // Define a largura da imagem como 40%
    var containerElement = document.querySelector(".container"); // Obtém o elemento do contêiner
    containerElement.insertBefore(imagemElement, containerElement.firstChild); // Insere a imagem no topo do contêiner
  }

  // Cria funcao para retornar à página inicial se clicar no botao
  function voltarPaginaInicial() {
    window.location.href = "calculo_imc.html"; // Direciona para a página inicial de cálculo
  }

  // Cria um ouvinte de clique no botão "Calcular Novamente"
  document
    .getElementById("calcularButton")
    .addEventListener("click", function () {
      voltarPaginaInicial();
    });
};

sessionStorage.removeItem("imc"); // Remove o valor do IMC armazenado no sessionStorage
