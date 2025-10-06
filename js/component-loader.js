// Function to load the navigation bar
function loadNavigation() {
    // 1. Fetch the content of the separate HTML file
    fetch('/Zenos.AI.github.io/nav.html') 
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
