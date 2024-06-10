const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", function () {
    const value = parseInt(this.dataset.value);
    resetStars();
    highlightStars(value);
  });
});
function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
}
function highlightStars(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add("active");
    }
  });
}
