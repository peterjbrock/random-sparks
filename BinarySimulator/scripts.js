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
