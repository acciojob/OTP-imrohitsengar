const codes = document.querySelectorAll('.code');

// Focus first input when page loads
codes[0].focus();

codes.forEach((input, index) => {

  // Move forward after entering a digit
  input.addEventListener('input', () => {

    if (input.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

input.addEventListener('keydown', (e) => {
    if (e.key !== 'Backspace') return;

    e.preventDefault();

    if (input.value !== '') {
      // Current field has a digit:
      // delete it and move to previous
      input.value = '';

      if (index > 0) {
        codes[index - 1].focus();
      }
    } 
    else if (index > 0) {
      // Current field is empty:
      // delete the previous field's digit
      codes[index - 1].value = '';
      codes[index - 1].focus();
    }
    else {
      // First field is empty
      input.focus();
    }
  });

 
});