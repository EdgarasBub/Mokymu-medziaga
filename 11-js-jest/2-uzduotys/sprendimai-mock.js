
// Pirmoji funkcija, kuri kreipiasi į antrąją
function skaiciuokSuma(a, b) {
    return a + b +this.getThirdNumber(b);
}
// Antroji funkcija
function getThirdNumber() {
    return b * 2;
}

module.exports = {skaiciuokSuma, getThirdNumber}