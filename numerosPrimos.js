/* Escribir una función que reciba un número como parámetro y que muestre por consola todos los números primos hasta ese número recibido. Recordatorio: números primos son aquellos que solo son divisibles por 1 o por sí mismos: 1, 2, 3, 5, 7, 11, 13, etc. Para saber si es "divisible por un valor", recuerden que pueden utilizar el operador de resto (%). Ej: si le paso el número 8, debería mostrar 1, 2, 3, 5, 7. */
let cont;
let primos = [];

primos = numerosPrimos(100);
console.log(primos);

//Funcion para saber si UN numero es primo, empiezo desde el numero 2 hasta n-1 ya que todos los numeros son divisibles por 1 y por si mismos
function primo(numero) {
    for(let i = 2; i<numero-1; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return numero;
}

//Funcion para saber todos los numeros primos hasta n. No contemplo el 1 porque no es un numero compuesto
function numerosPrimos(numero) {
    let arr = []
    for(let i = 2; i<=numero; i++) {
        if(primo(i)){
            arr.push(i);
        }
    }
    return arr;
}