document.addEventListener("DOMContentLoaded", function () {
    const bitPanels = document.querySelectorAll(".bit-panel");

    bitPanels.forEach((bitPanel) => {
        bitPanel.addEventListener("click", function () {
            // Toggle the bit state
            const currentState = this.dataset.state;
            const newState = currentState === "0" ? "1" : "0";
            this.dataset.state = newState;
            this.style.backgroundColor = newState === "1" ? "white" : "black";

            // Update the bit value displayed under the bit panel
            const bitValue = this.querySelector(".bit-value");
            bitValue.textContent = newState;

            // Update binary, decimal, hexadecimal, and ASCII outputs
            updateOutputs();
        });
    });
    // Add this code to set up the event listener for the reset button
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function () {
        // Reset all bit panels to data state 0
        bitPanels.forEach((bitPanel) => {
            bitPanel.dataset.state = "0";
            bitPanel.style.backgroundColor = "black";

            // Update the bit value displayed under the bit panel
            const bitValue = bitPanel.querySelector(".bit-value");
            bitValue.textContent = "0";
        });

        // Update binary, decimal, hexadecimal, and ASCII outputs
        updateOutputs();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ... existing code ...

    // Add this code to set up the event listener for the increment button
    const incrementButton = document.getElementById("incrementButton");
    incrementButton.addEventListener("click", function () {
        // Get the current binary value
        let binary = "";
        for (let i = 0; i < bitPanels.length; i++) {
            binary += bitPanels[i].dataset.state;
        }
        binary = binary.replace(/\s/g, "");

        // Increment the binary value by 1
        let decimal = parseInt(binary, 2);
        decimal++;
        if (decimal > 255) decimal = 0;  // Wrap around to 0 if the value exceeds 255

        // Convert the new decimal value back to binary
        binary = decimal.toString(2).padStart(8, "0");

        // Update the bit panels and bit values
        for (let i = 0; i < bitPanels.length; i++) {
            const bitValue = binary[i] === "1" ? "1" : "0";
            bitPanels[i].dataset.state = bitValue;
            bitPanels[i].style.backgroundColor = bitValue === "1" ? "white" : "black";
            bitPanels[i].querySelector(".bit-value").textContent = bitValue;
        }

        // Update binary, decimal, hexadecimal, and ASCII outputs
        updateOutputs();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ... existing code ...

    // Add this code to set up the event listener for the decrement button
    const decrementButton = document.getElementById("decrementButton");
    decrementButton.addEventListener("click", function () {
        // Get the current binary value
        let binary = "";
        for (let i = 0; i < bitPanels.length; i++) {
            binary += bitPanels[i].dataset.state;
        }
        binary = binary.replace(/\s/g, "");

        // Decrement the binary value by 1
        let decimal = parseInt(binary, 2);
        decimal--;
        if (decimal < 0) decimal = 255;  // Wrap around to 255 if the value goes below 0

        // Convert the new decimal value back to binary
        binary = decimal.toString(2).padStart(8, "0");

        // Update the bit panels and bit values
        for (let i = 0; i < bitPanels.length; i++) {
            const bitValue = binary[i] === "1" ? "1" : "0";
            bitPanels[i].dataset.state = bitValue;
            bitPanels[i].style.backgroundColor = bitValue === "1" ? "white" : "black";
            bitPanels[i].querySelector(".bit-value").textContent = bitValue;
        }

        // Update binary, decimal, hexadecimal, and ASCII outputs
        updateOutputs();
    });
});

function updateOutputs() {
    const bitPanels = document.querySelectorAll(".bit-panel");
    let binary = "";
    for (let i = 0; i < bitPanels.length; i++) {
        binary += bitPanels[i].dataset.state === "1" ? "1" : "0";
        if (i === 3) binary += " ";
    }

    const decimal = parseInt(binary.replace(/\s/g, ""), 2);

    const hex = decimal.toString(16).toUpperCase().padStart(2, "0");

    const ascii = decimal >= 32 && decimal <= 126 ? String.fromCharCode(decimal) : "N/A";

    document.getElementById("binaryOutput").textContent = binary;
    document.getElementById("decimalOutput").textContent = decimal;
    document.getElementById("hexOutput").textContent = hex;
    document.getElementById("asciiOutput").textContent = ascii;
}
