function highlightParagraph() {
  document.getElementById("para1").classList.toggle("highlight");
}

function markAllParagraphs() {
  const paragraphs = document.querySelectorAll("#section2 p");
  paragraphs.forEach(paragraph => {
    paragraph.classList.toggle("marked");
  });
}