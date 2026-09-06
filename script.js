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

    // 1. Current input has a digit:
    // Clear it and stay focused here.
    if (input.value !== '') {
      input.value = '';
      input.focus();
      return;
    }

    // 3. First input is empty:
    // Keep focus on the first input.
    if (index === 0) {
      input.focus();
      return;
    }

    // 2. Current input is empty and isn't first:
    // Clear previous input and move focus there.
    codes[index - 1].value = '';
    codes[index - 1].focus();

  });



 
});