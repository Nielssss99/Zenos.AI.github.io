// 1. Get references to the elements
const listItem = document.getElementById('scenario-item');
const displayArea = document.getElementById('details-display');

// 2. Define the function to handle the click
function showDetails() {
    // Get the string value from the data-details attribute
    const detailsText = listItem.getAttribute('data-details');
    
    // Inject the string into the display area using .innerHTML.
    // .innerHTML interprets the <strong> tags and renders them as bold.
    displayArea.innerHTML = `<p>${detailsText}</p>`;
}

// 3. Attach the event listener
listItem.addEventListener('click', showDetails);
