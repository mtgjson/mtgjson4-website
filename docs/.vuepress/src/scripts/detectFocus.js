export default function() {
  document.addEventListener('click', () => {
    document.body.classList.add('no-keyboard-focus');
    document.body.classList.remove('keyboard-focus');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-focus');
      document.body.classList.remove('no-keyboard-focus');
    }
  });
}
