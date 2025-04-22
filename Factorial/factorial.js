function calcularFactorial(num) {
    if (typeof num !== 'number' || num < 0) {
      throw new Error("Debe ser un número entero no negativo");
    }
    if (num === 0 || num === 1) return 1;
    return num * calcularFactorial(num - 1);
  }
  
  module.exports = calcularFactorial;
  