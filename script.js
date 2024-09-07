const navMenu = document.querySelector("nav");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navUl = document.getElementsByClassName("nav-items")[0];
const close = document.querySelector("close");
const topLink = document.querySelector(".top-link");

toggleButton.addEventListener("click", () => {
  navUl.classList.toggle("active");
  document.body.classList.toggle("hidden");
  document.body.classList.toggle("cross");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 550) {
    navMenu.style.position = "fixed";
    navMenu.style.display = "flex";
    navMenu.style.backgroundColor = "rgba(209, 210, 222, 0.8)";
    topLink.classList.add("show-link");
  } else {
    navMenu.style.position = "absolute";
    navMenu.style.display = "none";
    topLink.classList.remove("show-link");
  }
});

function hideUl() {
  document.body.classList.toggle("cross");
  document.body.classList.toggle("hidden");
  navUl.classList.toggle("active");
}

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
