const btn = document.getElementById("hamburger-btn");
const nav = document.getElementById("menu");

const dropDown = document.getElementsByClassName("footer-head-container");
const footerNav = document.getElementsByClassName("footer-nav-noboot");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

Array.from(dropDown).forEach((d, i) => {
  d.addEventListener("click", () => {
    d.classList.toggle("active");
    footerNav[i].classList.toggle("active");
  });
});
