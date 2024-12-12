

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
