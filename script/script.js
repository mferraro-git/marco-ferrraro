// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

// compute and insert dynamic age from data-birth attribute (format YYYY-MM-DD)
function computeAgeFromBirth(birthIso) {
  if (!birthIso) return "";
  const [y, m, d] = birthIso.split("-").map(Number);
  const today = new Date();
  let age = today.getFullYear() - y;
  const month = today.getMonth() + 1; // 1-12
  const day = today.getDate();
  if (month < m || (month === m && day < d)) age -= 1;
  return age;
}

document.addEventListener("DOMContentLoaded", () => {
  const ageEl = document.getElementById("age");
  if (ageEl) {
    const birth = ageEl.dataset.birth;
    const age = computeAgeFromBirth(birth);
    if (age !== "") ageEl.textContent = age;
  }
});
