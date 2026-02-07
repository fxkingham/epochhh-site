document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const dropdown = document.querySelector(".dropdown");
  const portfolioLink = document.querySelector(".portfolio-link");

  if (!toggleBtn || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");

    if (dropdown) dropdown.classList.remove("sub-open");
    if (portfolioLink) portfolioLink.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  // Hamburger toggle
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });

  // Portfolio submenu toggle (mobile)
  if (portfolioLink && dropdown) {
    portfolioLink.addEventListener("click", (e) => {
      // Only intercept on mobile widths
      if (window.matchMedia("(max-width: 780px)").matches) {
        e.preventDefault();
        e.stopPropagation();

        dropdown.classList.toggle("sub-open");
        const expanded = dropdown.classList.contains("sub-open");
        portfolioLink.setAttribute("aria-expanded", expanded ? "true" : "false");
      }
    });
  }

  // Close menu when clicking a normal link (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!target) return;

    // If they tapped Portfolio on mobile, submenu handles it above
    if (target.classList.contains("portfolio-link")) return;

    if (window.matchMedia("(max-width: 780px)").matches) {
      closeMenu();
    }
  });

  // Click outside closes menu
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;

    const clickedInsideNav = nav.contains(e.target);
    const clickedToggle = toggleBtn.contains(e.target);

    if (!clickedInsideNav && !clickedToggle) closeMenu();
  });

  // If you rotate / resize to desktop, reset menu
  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 780px)").matches) {
      closeMenu();
    }
  });
});
