 // Define constent variable kelvin with todays forecast value
const kelvin = 0;

//convert kelvin to celsius is less than 273
let celsius = kelvin - 273;

//calculating Fahrenheit
let fahrenheit = celsius*(9/5)+32;

//rounding decimal number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// define variable with celsius to newton value
var newton = celsius*(33/100);

//rounding decimal number
newton = Math.floor(newton);
//desplay the newton value
console.log('Newton: '+newton);