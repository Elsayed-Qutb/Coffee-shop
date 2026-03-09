document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});