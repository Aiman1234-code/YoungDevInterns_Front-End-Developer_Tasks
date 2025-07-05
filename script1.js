const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.querySelector(".close");

// Open modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Close modal when X is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
