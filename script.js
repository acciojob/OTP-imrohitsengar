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

  // B. Moving BACKWARD & CLEARING (Triggers strictly on Backspace)
  currentInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // Scenario 1: The current field has a character
      if (currentInput.value !== '') {
        e.preventDefault();          // Stop native backspace handling
        currentInput.value = '';     // Manually clear the current field
      } 
      // Scenario 2: The current field is already empty
      else if (currentInput.value === '') {
        if (index > 0) {
          e.preventDefault();        // Stop native backspace handling
          codes[index - 1].value = ''; // Forcefully clear the previous field's value
          codes[index - 1].focus();    // Correctly shift focus to that previous field
        }
      }
    }
  });
});

