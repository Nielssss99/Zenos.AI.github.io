// Drives the mobile sidebar. The navigation markup is injected after page load by
// component-loader.js, so elements are looked up on demand and clicks are delegated.
function setNavOpen(open) {
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const openButton = document.querySelector('.mobile-nav-bar .openbtn');
    if (!sidebar || !overlay || !openButton) {
        return;
    }

    sidebar.classList.toggle('open', open);
    sidebar.setAttribute('aria-hidden', String(!open));
    overlay.classList.toggle('open', open);
    openButton.setAttribute('aria-expanded', String(open));

    // Prevent the page behind the sidebar from scrolling
    document.body.style.overflow = open ? 'hidden' : '';
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.mobile-nav-bar .openbtn')) {
        setNavOpen(true);
    } else if (event.target.closest('#sidebarOverlay, #mySidebar .closebtn')) {
        setNavOpen(false);
    }
});

// Close the sidebar with the Escape key
document.addEventListener('keydown', (event) => {
    const sidebar = document.getElementById('mySidebar');
    if (event.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
        setNavOpen(false);
    }
});
