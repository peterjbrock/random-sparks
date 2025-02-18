document.addEventListener("DOMContentLoaded", function () {
    const bitPanels = document.querySelectorAll(".bit-panel");
    const binaryOutput = document.getElementById("binaryOutput");
    const hexOutput = document.getElementById("hexOutput");
    const decimalOutput = document.getElementById("decimalOutput");
    const asciiOutput = document.getElementById("asciiOutput");
    const resetButton = document.getElementById("resetButton");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");

    bitPanels.forEach(bitPanel => {
        bitPanel.addEventListener("click", () => {
            const currentState = bitPanel.dataset.state;
            const newState = currentState === "0" ? "1" : "0";
            bitPanel.dataset.state = newState;
            bitPanel.style.backgroundColor = newState === "1" ? "white" : "black";
            bitPanel.querySelector(".bit-value").textContent = newState;
            updateOutputs();
        });
    });

    resetButton.addEventListener("click", () => {
        bitPanels.forEach(bitPanel => {
            bitPanel.dataset.state = "0";
            bitPanel.style.backgroundColor = "black";
            bitPanel.querySelector(".bit-value").textContent = "0";
        });
        updateOutputs();
    });

    incrementButton.addEventListener("click", () => {
        let decimal = parseInt(document.getElementById("binaryOutput").textContent.replace(/\s/g, ""), 2);
        decimal = (decimal + 1) % 256; // Increment, wrap around at 256 (8 bits)
        updateBinaryFromDecimal(decimal);
        updateOutputs();
    });

    decrementButton.addEventListener("click", () => {
        let decimal = parseInt(document.getElementById("binaryOutput").textContent.replace(/\s/g, ""), 2);
        decimal = (decimal - 1 + 256) % 256; // Decrement, wrap around, handle negative
        updateBinaryFromDecimal(decimal);
        updateOutputs();
    });

    function updateBinaryFromDecimal(decimal) {
        let binary = decimal.toString(2).padStart(8, '0');
        const bitPanels = document.querySelectorAll(".bit-panel");
        for (let i = 0; i < 8; i++) {
            const bit = parseInt(binary[i]); // Convert char to int
            bitPanels[i].dataset.state = bit;
            bitPanels[i].style.backgroundColor = bit === 1 ? "white" : "black";
            bitPanels[i].querySelector(".bit-value").textContent = bit; // Crucial: Update displayed value!
        }

        binary = binary.slice(0, 4) + " " + binary.slice(4, 8); // Add space
    }

    function updateOutputs() {
        let binary = "";
        bitPanels.forEach((bitPanel, index) => {
            binary += bitPanel.dataset.state;
            if (index === 3) binary += " ";
        });

        const decimal = parseInt(binary.replace(/\s/g, ""), 2);
        const hex = decimal.toString(16).toUpperCase().padStart(2, "0");
		
		let ascii = "";
    if (decimal >= 32 && decimal <= 126) {
        ascii = String.fromCharCode(decimal);
    } else {
        // Handle non-printable characters
        switch (decimal) {
            case 0: ascii = "(NUL)"; break;  // Null character
            case 1: ascii = "(SOH)"; break;  // Start of Heading
            case 2: ascii = "(STX)"; break;  // Start of Text
            case 3: ascii = "(ETX)"; break;  // End of Text
            case 4: ascii = "(EOT)"; break;  // End of Transmission
            case 5: ascii = "(ENQ)"; break;  // Enquiry
            case 6: ascii = "(ACK)"; break;  // Acknowledge
            case 7: ascii = "(BEL)"; break;  // Bell
            case 8: ascii = "(BS)"; break;  // Backspace
            case 9: ascii = "(HT)"; break;  // Horizontal Tab
            case 10: ascii = "(LF)"; break; // Line Feed
            case 11: ascii = "(VT)"; break; // Vertical Tab
            case 12: ascii = "(FF)"; break; // Form Feed
            case 13: ascii = "(CR)"; break; // Carriage Return
            case 14: ascii = "(SO)"; break; // Shift Out
            case 15: ascii = "(SI)"; break; // Shift In
            case 16: ascii = "(DLE)"; break; // Data Link Escape
            case 17: ascii = "(DC1)"; break; // Device Control 1
            case 18: ascii = "(DC2)"; break; // Device Control 2
            case 19: ascii = "(DC3)"; break; // Device Control 3
            case 20: ascii = "(DC4)"; break; // Device Control 4
            case 21: ascii = "(NAK)"; break; // Negative Acknowledge
            case 22: ascii = "(SYN)"; break; // Synchronous Idle
            case 23: ascii = "(ETB)"; break; // End of Transmission Block
            case 24: ascii = "(CAN)"; break; // Cancel
            case 25: ascii = "(EM)"; break; // End of Medium
            case 26: ascii = "(SUB)"; break; // Substitute
            case 27: ascii = "(ESC)"; break; // Escape
            case 28: ascii = "(FS)"; break; // File Separator
            case 29: ascii = "(GS)"; break; // Group Separator
            case 30: ascii = "(RS)"; break; // Record Separator
            case 31: ascii = "(US)"; break; // Unit Separator
            case 127: ascii = "(DEL)"; break; // Delete
            default: ascii = "N/A";        // For other out-of-range values
        }
    }

		

        binaryOutput.textContent = binary;
        hexOutput.textContent = hex;
        decimalOutput.textContent = decimal;
        asciiOutput.textContent = ascii;
    }

    updateOutputs(); // Initialize outputs on load
});
