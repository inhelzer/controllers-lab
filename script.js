const btnTheme = document.getElementById('toggleTheme');
const btnGrid = document.getElementById('toggleGrid');

btnTheme?.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

btnGrid?.addEventListener('click', () => {
  document.body.classList.toggle('grid');
});
