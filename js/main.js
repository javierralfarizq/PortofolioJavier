// Menambahkan class js ke html agar animasi reveal hanya aktif saat JS aktif
document.documentElement.classList.add("js");

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Tutup menu saat link diklik
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", false);
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun otomatis di footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Animasi reveal saat scroll
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
}