const codes = document.querySelectorAll('.code');

// Focus first input when page loads
codes[0].focus();

codes.forEach((input, index) => {

  // Move forward after entering a digit
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Backspace behavior
  input.addEventListener('keydown', (e) => {

    if (e.key === 'Backspace') {
      e.preventDefault();

      // Always delete the current field first
      input.value = '';

      // Then move focus to previous field if it exists
      if (index > 0) {
        codes[index - 1].focus();
      } else {
        // If we're already at the first field,
        // keep focus on the first field
        codes[0].focus();
      }
    }

  });

});