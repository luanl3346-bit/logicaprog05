// Criar uma função converterCelsius(temp) que converta
// Celsius para Fahrenheit: (temp * 9/5) + 32

function converterCelsius(temp: number): number {
    return (temp * 9/5) + 32
}
console.log(`A temperatura: ${converterCelsius(20)}`);