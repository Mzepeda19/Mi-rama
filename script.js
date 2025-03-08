// Números

let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero");

// Verificar que los numeros son iguales
if (num1 === num2 && num2 === num3){
    console.log("Los numeros son iguales: ", num1, num2, num3);
    document.write(`Los números son iguales: ${num1}, ${num2}, ${num3}`);
} else {
    // Array y orden
    let numeros = [num1, num2, num3];
    let mayorMenor = [...numeros].sort((a, b) => b - a);
    let menorMayor = [...numeros].sort((a, b) => a - b);

    // Resultados en consola
    console.log("Orden de mayor a menor", menorMayor);

    console.log("Orden de menor a mayor", menorMayor);

    // Resultados en DOM

    document.write(`Orden de mayor a menor: ${mayorMenor.join(", ")}`);

    document.write(`Orden de menor a mayor: ${menorMayor.join(", ")}`);
}
