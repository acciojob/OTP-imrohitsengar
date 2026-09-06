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

    if (e.key !== 'Backspace') {
      return;
    }

    e.preventDefault();

    // First input
    if (index === 0) {
      input.value = '';
      input.focus();
      return;
    }

    // Current input has a value
    if (input.value !== '') {
      input.value = '';
      input.focus();
      return;
    }

    // Current input is empty, move to previous
    codes[index - 1].value = '';
    codes[index - 1].focus();

  });



 
});