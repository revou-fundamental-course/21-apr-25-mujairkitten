const far = document.getElementById('result')
const det = document.getElementById('detail')

let result = ''
let detail = ''
let isCtoF = true; // true: Celsius to Fahrenheit, false: Fahrenheit to Celsius

function updateUI() {
    const inputLabel = document.getElementById('inputLabel');
    const resultLabel = document.getElementById('resultLabel');
    const inputBox = document.getElementById('inputBox');
    const resultBox = document.getElementById('resultBox');
    const det = document.getElementById('detail');

    if (isCtoF) {
        inputLabel.textContent = 'Celcius (°C):';
        resultLabel.textContent = 'Fahrenheit (°F):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Celsius';
    } else {
        inputLabel.textContent = 'Fahrenheit (°F):';
        resultLabel.textContent = 'Celcius (°C):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Fahrenheit';
    }
}

function konversi() {
    const inputBox = document.getElementById('inputBox');
    const resultBox = document.getElementById('resultBox');
    const det = document.getElementById('detail');
    const inputValue = inputBox.value.trim();

    if (inputValue === '' || isNaN(inputValue)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    if (isCtoF) {
        const celsius = parseFloat(inputValue);
        const fahrenheit = (celsius * 9/5) + 32;
        resultBox.value = fahrenheit;
        det.value = `${celsius} × 9/5 + 32 = ${fahrenheit}`;
    } else {
        const fahrenheit = parseFloat(inputValue);
        const celsius = ((fahrenheit - 32) * 5/9);
        resultBox.value = celsius;
        det.value = `(${fahrenheit} - 32) × 5/9 = ${celsius}`;
    }
}

function rst() {
    document.getElementById('inputBox').value = '';
    document.getElementById('resultBox').value = '';
    document.getElementById('detail').value = '';
}

function tukar() {
    isCtoF = !isCtoF;
    updateUI();
}

// Call updateUI once on page load
window.onload = updateUI;