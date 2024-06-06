import "./style.css";
let button = document.querySelector(".drop-btn");

button.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#drop-menu").classList.toggle("show");
});

window.onclick = function (event) {
  if (!event.target.matches(".drop-btn")) {
    let dropdowns = document.querySelector(".dropdown-content");
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  }
};
