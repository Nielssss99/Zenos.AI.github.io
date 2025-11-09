document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scenario-item');
  const outputs = document.querySelectorAll('#details-output');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const html = item.getAttribute('data-details-html');
      if (!html) return;

      // Find the nearest #details-output (inside same card)
      const card = item.closest('.card');
      const output = card ? card.querySelector('#details-output') : null;

      if (output) {
        output.innerHTML = html;
      }
    });
  });
});
