// EJERCICIO 9 (Vanilla I)


// for (let i = 1; i <= 100; i++) {
//     if (i%2 === 0) {
//         console.log (i + " es divisible entre 2");
//     }else if (i%3 ===0){
//         console.log (i + " es divisible entre 3")
//     }
// };

// EJERCICIO 10 (VANILLA I)

// let suma = 0
// let articulos = parseInt(prompt("Introduce el número de artículos"));

// for (let i = 0 ; i < articulos; i++){
//     let producto = parseInt(prompt("Introduce el valor del producto"));
//     suma = suma + producto;
// }

// console.log ("El total a pagar es ", suma);

// 12. (VANILLA I) Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).

// let pass = "bootcamp"

// for (let i = 0; i < 3; i++) {
//     let pass2 = prompt("Introduce la contraseña");
//     if (pass2 === pass){
//         console.log ("Contraseña correcta");
//         break;
//     } else {
//         console.log ("Contraseña incorrecta");
//     }
// }