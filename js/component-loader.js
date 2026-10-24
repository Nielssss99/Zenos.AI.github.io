// Site root, derived from this script's own location (js/ sits directly below it).
// This keeps the navigation working on any hosting path and any page depth.
const SITE_ROOT = new URL('../', document.currentScript.src);

// Strip index.html and trailing slashes so "/zenos/" and "/zenos/index.html" compare equal
function normalizePath(path) {
    return decodeURIComponent(path).replace(/index\.html$/, '').replace(/\/?$/, '/');
}

// nav.html uses root-relative paths; resolve them against the site root
function resolveNavLinks(container) {
    container.querySelectorAll('a[href]').forEach(link => {
        link.href = new URL(link.getAttribute('href'), SITE_ROOT).href;
    });
    container.querySelectorAll('img[src]').forEach(img => {
        img.src = new URL(img.getAttribute('src'), SITE_ROOT).href;
    });
}

// Highlight the link that points at the page being viewed
function markActiveLink(container) {
    const currentPath = normalizePath(location.pathname);
    container.querySelectorAll('a[href]').forEach(link => {
        if (normalizePath(new URL(link.href).pathname) === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Function to load the navigation bar
function loadNavigation() {
    // 1. Fetch the content of the separate HTML file
    fetch(new URL('nav.html', SITE_ROOT))
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // 2. Find the placeholder and inject the loaded HTML
            const placeholder = document.getElementById('nav-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
                resolveNavLinks(placeholder);
                markActiveLink(placeholder);
            } else {
                console.error('Navigation placeholder not found in the DOM.');
            }
        })
        .catch(e => {
            console.error('Could not load navigation component:', e);
        });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadNavigation);
