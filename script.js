const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((input, index) => {

  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {

    if (e.key === 'Backspace') {

      e.preventDefault();

      if (input.value !== '') {
        input.value = '';
      } else if (index > 0) {
        codes[index - 1].value = '';
        codes[index - 1].focus();
      }
    }

  });

});