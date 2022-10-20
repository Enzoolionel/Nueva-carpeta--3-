// ! EJERCICIO N°1
// let texto = "hola"
// function _funcion(x) {
//     if (typeof x != "string") {
//         return console.log("ingrese datos validos")
//     } else {
//         return console.log(x.length)
//     }
// };
// _funcion(texto)
// !-----------------------

// ! EJERCICIO N°2
// let texto = "hola mundo"

// function _funcion(cadena, numero) {
//     if (typeof cadena != "string") {
//         return console.log("Datos invalidos")
//     } else {
//         return cadena.slice(0, numero)
//     }
// };
// console.log(_funcion(texto, 4))
// !------------------------

// !EJERCICIO N°3
// let texto = "Hola esto es un texto"

// function _funcion(x) {
//     if (typeof x != "string") {
//         return console.log("dato invalido")
//     } else {
//         return console.log(x.split(" "))
//     }
// }
// _funcion(texto)
// !------------------------

// !EJERCICIO N°4
// let texto = "asd"

// function _funcion(cadena, cantidad) {
//     if (typeof cadena != "string" || cadena == "" || cantidad == 0 || Math.sign(cantidad === -1) || cantidad == undefined) {
//         return console.log("dato invalido")
//     } else {
//         for (let i = 1; i <= cantidad; i++) {
//             console.log(`${i} ${cadena}`)
//         }
//     }
// }
// _funcion(texto, 3)
// !------------------------

// !EJERCICIO N°5
// const invertirCadena = (cadena) => {

//     if (typeof cadena != "string") {
//         return console.log("dato invalido")
//     } else {
//         let texto = cadena.split("").reverse().join("")
//         return console.log(texto)
//     }
// }
// invertirCadena("hola la re concha de tu madre")
// !------------------------

// !EJERCICIO N°6
// let texto = "habia una vez habia una cosa que habia cuando habia habia una milanesa que habia que sacarla porque habia que ponerle queso"

// const contarVeces = (cadena, buscado) => {
//     if (typeof cadena != "string") {
//         return console.log("dato invalido")
//     } else {
//         let separado = cadena.split(" ").filter(palabra => palabra === buscado)
//         return console.log(separado.length)
//     }
// }
// contarVeces(texto, "habia")
// *-------------------------------
// let textoo = "enzo peralta"
// const _funcion = (cadena = "", texto = "") => {
//     let i = 0,
//         contador = 0
//     while (i !== -1) {
//         i = cadena.indexOf(texto, i)
//         if (i !== -1) {
//             i++;
//             contador++;
//         }
//     }
//     return console.log(contador)
// }
// _funcion(textoo, "enzo")
// !------------------------

// !EJERCICIO N°7

// let texto = "asas sasa";
// const palindromo = (cadena) => {
//     let separado = cadena.split("").reverse().join("")
//     if (cadena === separado) {
//         return console.log("es")
//     } else {
//         return console.log("noes")
//     }
// }

// palindromo(texto)
// !------------------------

// !EJERCICIO N°8

// let texto = "xyz1 xyz2"

// const textoCambiado = (cadena = "", cambio = "") => {
//     (!cadena) ?
//     console.log("no ingresaste texto"): (!cambio) ?
//         console.log("no ingresaste caracteres") :
//         console.log(cadena.replace(new RegExp(cambio, "ig"), ""))
// }

// textoCambiado(texto, "asd")
// !------------------------

// !EJERCICIO N°9

// const randomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNum(500, 600))
// !------------------------

// !EJERCICIO N°10

// const capicua = (numero) => {
//     if (typeof numero !== "number") {
//         return console.log(`${numero} no es un numero`)
//     }
//     numero = numero.toString()
//     let alReves = numero.split("").reverse().join("")
//     if (numero === alReves) {
//         return console.log(`${numero} es capicua de ${alReves}`)
//     } else {
//         return console.log(`${numero} no es capicua de ${alReves}`)
//     }
// }
// capicua(22)
// !-----------------------

// !EJERCICIO N°11

// const factorial = (numero) => {
//     let facorial = 1;
//     for (let i = numero; i > 1; i--) {
//         facorial *= i
//     }
//     return console.log(`el ${numero} es factorial de ${facorial}`)
// }

// factorial(4)
// !-----------------------

// !EJERCICIO N°12

// const lista = ['enzo', 'lionel', 'peralta']

// let cambio = []

// lista.forEach((nombre, posision) => {
//     cambio[posision] = nombre
// });

// console.log(cambio)
// console.log(lista)

// let segundaLista = [...lista]

// console.log(segundaLista)


const sumarTodos = (numeros) => {
    let suma = 0

    for (let i = 1; i <= numeros; i++) {
        suma += i
    }
    return console.log(suma)
}


sumarTodos(300)
sumarTodos(129)
sumarTodos(53)
sumarTodos(41)