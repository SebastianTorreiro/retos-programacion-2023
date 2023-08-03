function fizzBuzz(){
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


    for (let i = 1; i <= 100; i++) {
        const fizzbuzz  = i % 15 === 0 ? 'fizzbuzz' : null
        const fizz  =  i % 3 === 0 ? 'fizz' : null
        const buzz  = i % 5 === 0 ? 'buzz' : i
        const logue = fizzbuzz ? fizzbuzz : fizz ? fizz : buzz
        console.log(logue)
    }

}

fizzBuzz();