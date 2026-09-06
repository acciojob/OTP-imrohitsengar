// 1. Grab all input elements using the correct class selector '.'
const codes = document.querySelectorAll('.code');

// 2. Automatically focus the very first input box when the page loads
if (codes.length > 0) {
  codes[0].focus();
}

// 3. Loop through each input box using forEach
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
      // If the field is currently empty, jump back and clear the previous input's value
      if (currentInput.value === '') {
        if (index > 0) {
          codes[index - 1].value = ''; // Instantly clears the previous field's value
          codes[index - 1].focus();    // Correctly shifts focus to the previous field
        }
      } 
      // If the field is NOT empty, let native backspace handle clearing this field first
    }
  });
});