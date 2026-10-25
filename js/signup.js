// Submits the updates signup form in the background so visitors stay on the page
// and see a confirmation or error message.
const signupForm = document.querySelector('.notify-container form');
const signupStatus = document.getElementById('signup-status');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = signupForm.querySelector('button');
    submitButton.disabled = true;
    signupStatus.textContent = 'Sending...';

    try {
        const response = await fetch(signupForm.action, {
            method: 'POST',
            body: new FormData(signupForm),
            headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        signupForm.reset();
        signupStatus.textContent = 'Thanks! You are on our email list.';
    } catch (e) {
        console.error('Could not submit the signup form:', e);
        signupStatus.textContent = 'Something went wrong. Please try again.';
    } finally {
        submitButton.disabled = false;
    }
});
