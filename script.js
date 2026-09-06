// 1. Grab all input elements using the correct class selector '.'
const codes = document.querySelectorAll('.code');

// 2. Automatically focus the very first input box when the page loads
if (codes.length > 0) {
  codes[0].focus();
}
codes.forEach((currentInput, index) => {
  
  // A. Moving FORWARD (Triggers when a valid digit is entered)
  currentInput.addEventListener('input', () => {
    if (currentInput.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });
currentInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // SCENARIO 1: The current field is completely empty
      if (currentInput.value === '') {
        if (index > 0) {
          codes[index - 1].value = ''; // Clear the previous field's value
          codes[index - 1].focus();    // Move focus to the previous field
        }
      } 
      // SCENARIO 2: The current field has a value in it
      else {
        // We let the native backspace clear the current box,
        // but we use setTimeout to immediately shift focus backward right after
        if (index > 0) {
          setTimeout(() => {
            codes[index - 1].focus();
          }, 0);
        }
      }
    }
  });
  
});

