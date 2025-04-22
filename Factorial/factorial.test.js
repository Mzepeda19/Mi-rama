const calcularFactorial = require('./factorial');

test('El factorial de 5 debe ser 120', () => {
  expect(calcularFactorial(5)).toBe(120);
});

test('El factorial de 6 debe ser 720', () => {
  expect(calcularFactorial(6)).toBe(720);
});

test('Lanza error si se pasa un string', () => {
  expect(() => calcularFactorial("hola")).toThrow("Debe ser un número entero no negativo");
});
