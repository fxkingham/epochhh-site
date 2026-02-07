const header = document.querySelector(".site-header");

function updateHeader() {
  if (!header) return;

  // Only show header when you're at the very top
  if (window.scrollY <= 0) {
    header.classList.remove("is-hidden");
  } else {
    header.classList.add("is-hidden");
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader(); // run once on load
