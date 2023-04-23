// Get the range sliders, value spans, hexadecimal value input, color display, and color patches for each component
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");
const redValueDisplay = document.getElementById("red-value-display");
const greenValueDisplay = document.getElementById("green-value-display");
const blueValueDisplay = document.getElementById("blue-value-display");
const hexValue = document.getElementById("hex-value");
const colorDisplay = document.querySelector(".color-display");
const redPatch = document.querySelector(".color-patch.red");
const greenPatch = document.querySelector(".color-patch.green");
const bluePatch = document.querySelector(".color-patch.blue");

// Define a function to update the color and byte values based on the current slider values
function updateColor() {
	// Get the current slider values for red, green, and blue
	const red = redSlider.value;
	const green = greenSlider.value;
	const blue = blueSlider.value;

	// Create a CSS color string using the current red, green, and blue values
	const color = `rgb(${red}, ${green}, ${blue})`;

	// Update the background color of the color display element
	colorDisplay.style.backgroundColor = color;

	// Update the text content of the value spans to reflect the current red, green, and blue values
	redValueDisplay.textContent = red;
	greenValueDisplay.textContent = green;
	blueValueDisplay.textContent = blue;

	// Update the background color of each color patch to reflect the current value of its corresponding slider
	redPatch.style.backgroundColor = `rgb(${red}, 0, 0)`;
	greenPatch.style.backgroundColor = `rgb(0, ${green}, 0)`;
	bluePatch.style.backgroundColor = `rgb(0, 0, ${blue})`;

	// Convert the current red, green, and blue values to a combined hexadecimal value and update the value of the hexadecimal value input
	hexValue.value = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

// Define a function to convert a decimal value to a two-digit hexadecimal value
function toHex(value) {
	const hex = Number(value).toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

// Add event listeners to the range sliders that call the updateColor function whenever the slider values change
redSlider.addEventListener("input", () => {
	updateColor();
});
greenSlider.addEventListener("input", () => {
	updateColor();
});
blueSlider.addEventListener("input", () => {
	updateColor();
});

// Call the updateColor function initially to set the initial color and byte values
updateColor();
