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

// ===== Lightbox Sertifikat =====
const certModal = document.getElementById("cert-modal");
const certModalImg = document.getElementById("cert-modal-img");
const certModalTitle = document.getElementById("cert-modal-title");
const certModalClose = document.getElementById("cert-modal-close");

if (certModal) {
  // Buka modal saat gambar sertifikat diklik
  document.querySelectorAll(".cert-media").forEach(function (media) {
    media.addEventListener("click", function () {
      const img = media.querySelector("img");
      certModalImg.src = img.src;
      certModalImg.alt = img.alt;
      certModalTitle.textContent = media.getAttribute("data-title") || "";
      certModal.classList.add("open");
      document.body.style.overflow = "hidden"; // kunci scroll belakang
    });
  });

  // Fungsi tutup modal
  function closeCertModal() {
    certModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Tutup lewat tombol ✕
  if (certModalClose) {
    certModalClose.addEventListener("click", closeCertModal);
  }

  // Tutup lewat klik area gelap di luar kotak
  certModal.addEventListener("click", function (e) {
    if (e.target === certModal) closeCertModal();
  });

  // Tutup lewat tombol Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && certModal.classList.contains("open")) {
      closeCertModal();
    }
  });
}