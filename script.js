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

    // Current input has a digit
    if (input.value !== '') {
      // Delete it, but DON'T move focus
      input.value = '';
    }

    // Current input is already empty
    else if (index > 0) {
      // Delete previous digit
      codes[index - 1].value = '';

      // Move focus to previous input
      codes[index - 1].focus();
    }

    // First input is already empty
    else {
      input.focus();
    }

  });


 
});