const buttons = document.querySelectorAll('.calc__button');
const display = document.querySelector('.calc__display');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
  });
}
