// Get references to result and detail elements (not used directly in this script)
const far = document.getElementById('result')
const det = document.getElementById('detail')

// Variables to store result and detail text (not used directly)
let result = ''
let detail = ''
let isCtoF = true; // true: Celsius to Fahrenheit, false: Fahrenheit to Celsius

// Function to update the UI labels and placeholders based on conversion direction
function updateUI() {
    const inputLabel = document.getElementById('inputLabel');
    const resultLabel = document.getElementById('resultLabel');
    const inputBox = document.getElementById('inputBox');
    const resultBox = document.getElementById('resultBox');
    const det = document.getElementById('detail');

    if (isCtoF) {
        // If converting from Celsius to Fahrenheit
        inputLabel.textContent = 'Celcius (°C):';
        resultLabel.textContent = 'Fahrenheit (°F):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Celsius'; // "Enter Celsius temperature"
    } else {
        // If converting from Fahrenheit to Celsius
        inputLabel.textContent = 'Fahrenheit (°F):';
        resultLabel.textContent = 'Celcius (°C):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Fahrenheit'; // "Enter Fahrenheit temperature"
    }
}

// Function to perform the temperature conversion
function konversi() {
    const inputBox = document.getElementById('inputBox');
    const resultBox = document.getElementById('resultBox');
    const det = document.getElementById('detail');
    const inputValue = inputBox.value.trim();

    // Check if input is empty or not a number
    if (inputValue === '' || isNaN(inputValue)) {
        alert("Masukkan angka yang valid."); // "Enter a valid number."
        return;
    }

    if (isCtoF) {
        // Convert Celsius to Fahrenheit
        const celsius = parseFloat(inputValue);
        const fahrenheit = (celsius * 9/5) + 32;
        resultBox.value = fahrenheit;
        det.value = `${celsius} × 9/5 + 32 = ${fahrenheit}`; // Show calculation detail
    } else {
        // Convert Fahrenheit to Celsius
        const fahrenheit = parseFloat(inputValue);
        const celsius = ((fahrenheit - 32) * 5/9);
        resultBox.value = celsius;
        det.value = `(${fahrenheit} - 32) × 5/9 = ${celsius}`; // Show calculation detail
    }
}

// Function to reset/clear all input and output fields
function rst() {
    document.getElementById('inputBox').value = '';
    document.getElementById('resultBox').value = '';
    document.getElementById('detail').value = '';
}

// Function to switch conversion direction (Celsius <-> Fahrenheit)
function tukar() {
    isCtoF = !isCtoF; // Toggle the conversion direction
    updateUI();       // Update the UI to match the new direction
}

// Initialize the UI when the page loads
window.onload = updateUI;