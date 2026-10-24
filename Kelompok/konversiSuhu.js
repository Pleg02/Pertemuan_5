const { celciusToFahrenheit } = require('./rumusSuhu');
//const chalk = require('chalk');

const celsius = 30;
const fahrenheit = celciusToFahrenheit(celsius);

console.log(("================================="));
console.log(("    PROGRAM KONVERSI SUHU    "));
console.log(("================================="));
console.log(`Suhu Awal  : ${(celsius + '°C')}`);
console.log(`Hasil      : ${(fahrenheit + '°F')}`);
console.log(("================================="));