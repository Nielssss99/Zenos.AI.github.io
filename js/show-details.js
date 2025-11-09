document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scenario-item');
  const output = document.getElementById('details-output');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const htmlContent = item.getAttribute('data-details-html');
      if (output && htmlContent) {
        output.innerHTML = htmlContent;
      }
    });
  });
});
