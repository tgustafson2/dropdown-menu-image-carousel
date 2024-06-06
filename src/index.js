import "./style.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
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

let slideIndex = 1;
let pictures = document.querySelectorAll("img");
let picture1 = new Image();
let picture2 = new Image();
let picture3 = new Image();
picture1.style.width = "100%";
picture2.style.width = "100%";
picture3.style.width = "100%";
picture1.src = img1;
picture2.src = img2;
picture3.src = img3;
pictures[0].parentNode.replaceChild(picture1, pictures[0]);
pictures[1].parentNode.replaceChild(picture2, pictures[1]);
pictures[2].parentNode.replaceChild(picture3, pictures[2]);

let timer;

let runTimer = () => {
  timer = setTimeout(autoUpdate, 5000);
};

showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

function autoUpdate() {
  plusSlides(1);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  runTimer();
}

let advance = document.querySelector(".next");
let previous = document.querySelector(".prev");
let dots = document.querySelectorAll(".dots");

advance.addEventListener("click", (event) => {
  event.preventDefault();
  plusSlides(1);
});

previous.addEventListener("click", (event) => {
  event.preventDefault();
  plusSlides(-1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    event.preventDefault();
    currentSlide(index + 1);
  });
});
