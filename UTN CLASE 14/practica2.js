
/* for(let nombre of nombres3){
    console.log(nombre)
}

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

//esto debe generar un segundo array con ['PEDRO',  *//* 'JuaN'] */

/* const estaEnMinuscula = (str) => str == str.toLowerCase()
const tieneMaysucula = (str) => !estaEnMinuscula(str)

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN'];
let mayusculas = [];
for (let nombre of array){
    if(sitienemayuscula(nombre)){
        mayusculas.push(nombre);
    }
}

console.log(nombre) */


const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

/* for sumarCaracteres = 0;

for(let index = 0; index < nombres3.length; index = index + 1){
    sumarCaracteres = sumarCaracteres + nombres3[index].length
}
console.log('la sumatoria de los caracteres es:'(sumarCaracteres) )
 */
/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/

/* for (let index = 0; index < nombres3.length; index++) {
    sumarCaracteres = sumarCaracteres + nombres3[index].length
}
console.log(`la sumatoria de caracteres es ${sumarCaracteres}`) */

let caracteres = 0
for(let index = 0 ; index < nombres3.length; index = index + 1){

    caracteres = caracteres + nombres3[index].length
}
console.log('La cantidad de caracteres es: ' + caracteres)