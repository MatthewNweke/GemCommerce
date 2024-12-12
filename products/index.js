

// Select the "here" text element
const hereText = document.querySelector(".here");

// Select all font options
const fontOptions = document.querySelectorAll(".font_styles li");

// Add click event listeners to each font option
fontOptions.forEach((fontOption) => {
  fontOption.addEventListener("click", () => {
    // Get the class name of the clicked font option
    const selectedFontClass = fontOption.className;

    // Change the font family of the "here" text
    hereText.style.fontFamily = getComputedStyle(fontOption).fontFamily;

    // Optional: Update the text content to reflect the selected font
    hereText.textContent = selectedFontClass.charAt(0).toUpperCase() + selectedFontClass.slice(1);
  });
});


// Select all tab elements and content sections
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// Add click event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Add 'active' class to the clicked tab and its corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});





const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const quantityDisplay = document.getElementById('quantity');

let quantity = 1; // Default quantity

// Update quantity display
const updateQuantityDisplay = () => {
  quantityDisplay.textContent = quantity;
  decrementBtn.disabled = quantity <= 1; // Disable decrement button if quantity is 1
};

// Increment functionality
incrementBtn.addEventListener('click', () => {
  quantity += 1;
  updateQuantityDisplay();
});

// Decrement functionality
decrementBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity -= 1;
    updateQuantityDisplay();
  }
});

// Initial state update
updateQuantityDisplay();