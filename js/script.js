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
    const infoArticle = document.getElementById('infoArticle');

    if (isCtoF) {
        // If converting from Celsius to Fahrenheit
        inputLabel.textContent = 'Celcius (°C):';
        resultLabel.textContent = 'Fahrenheit (°F):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Celsius';
        if (infoArticle) {
            infoArticle.innerHTML = `
                <p>Skala suhu Fahrenheit ditemukan oleh Daniel Gabriel Fahrenheit, seorang fisikawan Jerman, pada tahun 1724. Pada skala ini, titik beku air adalah 32° dan titik didih air adalah 212° pada tekanan atmosfer standar.</p>
                <p>Suhu <span class="formula s">S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class="formula s">S</span> dalam derajat Celsius (&deg;C) kali <span class="formula">9/5</span> tambah <span class="formula">32.</span></p>
                <div class="formula">
                    <span class="s">S</span><sub>(&deg;F)</sub> = (<span class="s">S</span><sub>(&deg;C)</sub> x 9/5) + 32
                </div>
                <div>
                    <br>atau<br><br>
                </div>
                <div class="formula">
                    <span class="s">S</span><sub>(&deg;F)</sub> = (<span class="s">S</span><sub>(&deg;C)</sub> x 1,8) + 32
                </div>
            `;
        }
    } else {
        // If converting from Fahrenheit to Celsius
        inputLabel.textContent = 'Fahrenheit (°F):';
        resultLabel.textContent = 'Celcius (°C):';
        inputBox.value = '';
        resultBox.value = '';
        det.value = '';
        inputBox.placeholder = 'Masukkan suhu Fahrenheit';
        if (infoArticle) {
            infoArticle.innerHTML = `
                <p>Skala suhu Celsius ditemukan oleh Anders Celsius, seorang astronom Swedia, pada tahun 1742. Celsius mengusulkan skala di mana 0° mewakili titik beku air dan 100° mewakili titik didih air. Skala Celsius ini kemudian menjadi standar pengukuran suhu yang digunakan di seluruh dunia.</p>
                <p>Suhu <span class="formula s">S</span> dalam derajat Celsius (&deg;C) sama dengan suhu <span class="formula s">S</span> dalam derajat Fahrenheit (&deg;F) dikurangi <span class="formula">32</span>, lalu dikali <span class="formula">5/9</span>.</p>
                <div class="formula">
                    <span class="s">S</span><sub>(&deg;C)</sub> = (<span class="s">S</span><sub>(&deg;F)</sub> - 32) x 5/9
                </div>
                <div>
                    <br>atau<br><br>
                </div>
                <div class="formula">
                    <span class="s">S</span><sub>(&deg;C)</sub> = (<span class="s">S</span><sub>(&deg;F)</sub> - 32) x 0,5556
                </div>
            `;
        }
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