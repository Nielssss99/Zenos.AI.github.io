function setNavOpen(open) {
  document.getElementById("mySidebar").classList.toggle("open", open);
  document.getElementById("mySidebar").setAttribute("aria-hidden", String(!open));
  document.getElementById("sidebarOverlay").classList.toggle("open", open);
  document.querySelector(".mobile-nav-bar .openbtn").setAttribute("aria-expanded", String(open));

  // Prevent the page behind the sidebar from scrolling
  document.body.style.overflow = open ? "hidden" : "";
}

function openNav() {
  setNavOpen(true);
}

function closeNav() {
  setNavOpen(false);
}

// Close the sidebar with the Escape key
document.addEventListener("keydown", (event) => {
  const sidebar = document.getElementById("mySidebar");
  if (event.key === "Escape" && sidebar && sidebar.classList.contains("open")) {
    closeNav();
  }
});
