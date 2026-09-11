const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }

});