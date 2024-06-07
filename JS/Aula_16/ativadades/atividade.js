 // URL da API
 const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

 // Função para buscar e exibir as imagens dos gatos
 async function fetchCatImages() {
   try {
     const response = await fetch(apiUrl);
     const data = await response.json();
     const catImagesContainer = document.getElementById('cat-images');

     // Transformar o retorno em array de objetos e criar elementos de imagem
     data.forEach(cat => {
       const img = document.createElement('img');
       img.src = cat.url;
       img.alt = 'Gato';
       img.width = 200; // Definir a largura da imagem (opcional)
       catImagesContainer.appendChild(img);
     });
   } catch (error) {
     console.error('Erro ao buscar as imagens dos gatos:', error);
   }
 }

 // Chamar a função ao carregar a página
 window.onload = fetchCatImages;