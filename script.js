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

    // Current input contains a digit
    if (input.value !== '') {
      input.value = '';
      return;
    }

    // Current input is empty AND this is the first input
    if (index === 0) {
      input.focus();
      return;
    }

    // Current input is empty, so delete previous digit
    if (index > 0) {
      codes[index - 1].value = '';
      codes[index - 1].focus();
    }

  });


 
});