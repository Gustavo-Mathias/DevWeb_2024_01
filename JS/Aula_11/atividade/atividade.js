window.onload = function () {
  // Exibir mensagem de boas-vindas
  window.alert("Bem-vindo à nossa página!");

  // Informar o título da página
  document.title = "Título Atualizado";

  // Criar uma section
  var section = document.createElement("section");

  // Criar um h1 dentro da section
  var sectionTitle = document.createElement("h1");
  sectionTitle.textContent = "Título da Seção";
  section.appendChild(sectionTitle);

  // Criar um parágrafo dentro da section
  var sectionParagraph = document.createElement("p");
  sectionParagraph.textContent = "Este é um parágrafo dentro da seção.";
  section.appendChild(sectionParagraph);

  // Adicionar a section ao corpo da página
  document.body.appendChild(section);

  // Criar um article
  var article = document.createElement("article");

  // Criar um h1 dentro do article
  var articleTitle = document.createElement("h1");
  articleTitle.textContent = "Título do Artigo";
  article.appendChild(articleTitle);

  // Criar um parágrafo dentro do article
  var articleParagraph = document.createElement("p");
  articleParagraph.textContent = "Este é um parágrafo dentro do artigo.";
  article.appendChild(articleParagraph);

  // Adicionar o article ao corpo da página
  document.body.appendChild(article);
};
