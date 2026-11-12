// CHEMZ CREATIVE — site interactions
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Portfolio category filters
const filterButtons = document.querySelectorAll(".filter-button");
const workItems = document.querySelectorAll(".work-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    workItems.forEach((item) => {
      item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
    });
  });
});

// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Update footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// IMPORTANT: Replace this with the CHEMZ CREATIVE WhatsApp number.
// Format: Indonesia country code 62, without +, spaces, or leading 0.
// Example: "6281234567890"
const WHATSAPP_NUMBER = "628XXXXXXXXXX";
const whatsappLink = document.querySelector("#whatsapp-link");
const whatsappMessage = encodeURIComponent("Halo CHEMZ CREATIVE, saya tertarik menggunakan jasa Anda. Boleh minta informasi lebih lanjut?");
if (WHATSAPP_NUMBER !== "628XXXXXXXXXX") {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
} else {
  whatsappLink.href = "https://wa.me/";
}
