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

  // Backspace behavior
   input.addEventListener('keydown', (e) => {

    if (e.key !== 'Backspace') {
      return;
    }

    e.preventDefault();

    // Current field has a value:
    // delete it and stay here
    if (input.value !== '') {
      input.value = '';
      return;
    }

    // Current field is empty:
    // go to previous field and delete it
    if (index > 0) {
      codes[index - 1].value = '';
      codes[index - 1].focus();
      return;
    }

    // First field is already empty:
    // stay on first field
    codes[0].focus();
  });

});