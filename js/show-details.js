// 1. Get references to ALL list items using the class name
const listItems = document.querySelectorAll('.scenario-item');

// 2. Loop through the list of items to attach an event listener to each one
listItems.forEach(item => {
    item.addEventListener('click', function() {
        // 'this' refers to the specific <li> element that was clicked
        
        // Check if the item is already displaying the full details (optional: prevents re-clicking)
        if (this.classList.contains('active-detail')) {
            // Optional: You could add logic here to revert it back to the brief text
            return; 
        }

        // Get the full detail string from the data-details attribute
        const detailsText = this.getAttribute('data-details');
        
        // Use innerHTML to replace the current text with the full, bolded HTML content.
        // This is where the bolding takes effect.
        this.innerHTML = detailsText;
        
        // Add a class to mark it as 'active' (useful for CSS styling)
        this.classList.add('active-detail');
    });
});
