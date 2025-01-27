console.log('********* 1 ***********');
console.log('********* 1 ***********');
console.log('********* 1 ***********');

function convertEurToUsd(eur, exchangeRate = 1.1) {
    return eur * exchangeRate;
}
let randomEur = Math.floor(Math.random() * 1000) + 1;

let usdAmount = convertEurToUsd(randomEur);

console.log(`${randomEur} EUR yra maždaug ${usdAmount.toFixed(2)} USD`);

console.log('********* 2 ***********');
console.log('********* 2 ***********');
console.log('********* 2 ***********');

function convertUsdToEur(usd, exchangeRate = 0.91) {
    return usd * exchangeRate;
}

let randomUsd = Math.floor(Math.random() * 1000) + 1;

let eurAmount = convertUsdToEur(randomUsd);

console.log(`${randomUsd} USD yra maždaug ${eurAmount.toFixed(2)} EUR`);

console.log('********* 3 ***********');
console.log('********* 3 ***********');
console.log('********* 3 ***********');

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let weight = 75;
let height = 1.77;

let bmi = calculateBMI(weight, height);

console.log(` BMI: ${bmi.toFixed(2)}`);

console.log('********* 4 ***********');
console.log('********* 4 ***********');
console.log('********* 4 ***********');

function ageInUnits(years) {
    let days = years * 365; 
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    console.log(`Jusu amzius: ${years} metai`);
    console.log(`Tai mazdaug:`);
    console.log(`${days} dienu`);
    console.log(`${hours} valandu`);
    console.log(`${minutes} minuciu`);
    console.log(`${seconds} sekundziu`);
}

let age = 25; 

ageInUnits(age);

console.log('********* 5 ***********');
console.log('********* 5 ***********');
console.log('********* 5 ***********');

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let tempCelsius = 25;
let tempFahrenheit = 77; 

console.log(`${tempCelsius}°C yra ${celsiusToFahrenheit(tempCelsius).toFixed(2)}°F`);
console.log(`${tempFahrenheit}°F yra ${fahrenheitToCelsius(tempFahrenheit).toFixed(2)}°C`);

console.log('********* 6 ***********');
console.log('********* 6 ***********');
console.log('********* 6 ***********');

let result = "";

for (let i = 1; i < 11; i++){
    result += i;
    if (i < 10) {
        result += "-";
    }
}
console.log (result)

console.log('********* 7 ***********');
console.log('********* 7 ***********');
console.log('********* 7 ***********');

for (let i = 1; i < 10; i++){
    let row = " ";
    for (let j = 1; j<= i; j++) {
        row += "* "; 
    }
    console.log (row)
}

console.log('********* 8 ***********');
console.log('********* 8 ***********');
console.log('********* 8 ***********');

function daysUntilChristmas() {
    let today = new Date();
    let year = today.getFullYear();
    let christmas = new Date(year, 11, 25);

    let timeDiff = christmas - today;
    let daysleft = Math.ceil(timeDiff / (1000 * 60 * 60 *24));

    console.log(`Iki kaledu liko ${daysleft}!`);
}

daysUntilChristmas();


console.log('********* 9 ***********');
console.log('********* 9 ***********');
console.log('********* 9 ***********');

let names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

let names1 = names.join(',');
let names2 = names.join('+');

console.log (names1);
console.log (names2);

console.log('********* 10 ***********');
console.log('********* 10 ***********');
console.log('********* 10 ***********');

function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = includeUppercase ? lowercaseChars.toUpperCase() : "";
    const numbers = includeNumbers ? "0123456789" : "";
    const symbols = includeSymbols ? "!@#$%^&*()_+-=[]{}|;':\"\\,.<>/?`~" : "";
    const allChars = lowercaseChars + uppercaseChars + numbers + symbols;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example usage
  const passwordLength = 12;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;
  
  const password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);
  console.log(password);
