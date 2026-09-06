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
      // CASE 1: If the field is currently empty, JUST move focus back (don't clear it)
      if (currentInput.value === '') {
        if (index > 0) {
          e.preventDefault();        // Prevent double-deletion side-effects
          codes[index - 1].focus();    // Simply shift focus to the previous box
        }
      } 
      // CASE 2: If the field has a character, empty it first and then jump focus back
      else {
        e.preventDefault();          // Override native browser deletion behavior
        currentInput.value = '';     // Clear the value of the current field
        if (index > 0) {
          codes[index - 1].focus();  // Shift focus to the previous box
        }
      }
    }
  });
  
});

