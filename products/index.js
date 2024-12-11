function changeColor(color) {
    const hoodie = document.getElementById('hoodie');
    hoodie.style.backgroundColor = color;
  }
  
  function updateFont() {
    const customText = document.getElementById('custom-text');
    const font = document.getElementById('text-font').value;
    customText.style.fontFamily = font;
  }
  
  function updateTextColor() {
    const customText = document.getElementById('custom-text');
    const color = document.getElementById('text-color').value;
    customText.style.color = color;
  }
  