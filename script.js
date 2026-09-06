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

    if (e.key === 'Backspace') {
      e.preventDefault();

      // Delete current field
      input.value = '';

      // Move focus to previous field
      if (index > 0) {
        codes[index - 1].focus();
      } else {
        // Already at first field
        codes[0].focus();
      }
    }

  });
 

});