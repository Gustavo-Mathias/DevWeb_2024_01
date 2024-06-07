document.getElementById("addForm").addEventListener("submit", addBook);

function addBook(e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const isbn = document.getElementById("isbn").value;

  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
      `;

  document.getElementById("book-list").appendChild(row);
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("isbn").value = "";
}

document.getElementById("book-list").addEventListener("click", removeBook);

function removeBook(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
}
