<script>
document.querySelectorAll('.scenario-item').forEach(item => {
  item.addEventListener('click', () => {
    const htmlContent = item.getAttribute('data-details-html');
    const detailsDiv = document.getElementById('details-output') || createDetailsDiv();
    detailsDiv.innerHTML = htmlContent; // Now <strong> works!
  });
});

function createDetailsDiv() {
  const div = document.createElement('div');
  div.id = 'details-output';
  div.style.marginTop = '1rem';
  div.style.padding = '1rem';
  div.style.border = '1px solid #ccc';
  div.style.borderRadius = '4px';
  document.querySelector('.card').appendChild(div);
  return div;
}
</script>
