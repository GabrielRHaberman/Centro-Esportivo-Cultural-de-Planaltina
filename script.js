// Espera o DOM carregar completamente antes de rodar o script
window.addEventListener('DOMContentLoaded', () => {

    // Seleciona todas as imagens do carrossel
    const imagens = document.querySelectorAll('.carrossel img');
    
    // Seleciona os botões de navegação
    const btnAnterior = document.querySelector('.carrossel-btn.anterior');
    const btnProximo = document.querySelector('.carrossel-btn.proximo');
  
    // Índice da imagem atualmente visível
    let indexAtual = 0;
  
    // Função para mostrar a imagem com base no índice
    function mostrarImagem(index) {
      imagens.forEach((img, i) => {
        img.classList.remove('active'); // Esconde todas
        if (i === index) img.classList.add('active'); // Mostra a desejada
      });
    }
  
    // Evento para botão "Anterior"
    btnAnterior.addEventListener('click', () => {
      indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem(indexAtual);
    });
  
    // Evento para botão "Próximo"
    btnProximo.addEventListener('click', () => {
      indexAtual = (indexAtual + 1) % imagens.length;
      mostrarImagem(indexAtual);
    });
  
    // Troca automática a cada 5 segundos (5000 milissegundos)
    setInterval(() => {
      indexAtual = (indexAtual + 1) % imagens.length;
      mostrarImagem(indexAtual);
    }, 5000);
  
    // Exibe a primeira imagem ao carregar a página
    mostrarImagem(indexAtual);
  });
  