const searchInput = document.getElementById('searchInput');
const fruitsList = document.querySelectorAll('.fruitsList li');
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  fruitsList.forEach(fruit => {
    const text = fruit.textContent.toLowerCase();
    const match = text.includes(searchTerm);
    fruit.style.display = match ? 'block' : 'none';
  });
});