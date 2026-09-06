//your JS code here. If required.
let codes=document.querySelectorAll('.code');
if (codes.length > 0) {
  codes[0].focus();
}
codes.forEach((currentInput,index)=>{
	currentInput.addEventListener('input', (e) => {
    if (currentInput.value.length === 1 && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });
  currentInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {    
      if (currentInput.value === '' && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = ''; // Optional: clears the previous field instantly
      }
    }
  });
})