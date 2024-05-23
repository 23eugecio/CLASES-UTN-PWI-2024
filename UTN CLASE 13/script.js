/* 
Crear una funcion que dado 3 valores nos devuelva la sumatoria
calcularSumatoria(1,2,3) => 6
Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(7,2) 7
crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'
generarEmail('pepe') => 'pepe@gmail.com'
*/

/* 1//
function Sumatoria(a,b,c){
    return a+b+c
}

2//
function mayor (a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}


3//
function generarGmail(nombreDeEmail){
return String(nombreDeUsuario +'@gmail')
}
console.log(GenerarEmail('eugeciotti')) */

/* 
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS
function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
*/

const obtenerMayor(a , b)=>{
    if (a > b){
        return a
    } else{ (a < b)
        return b
    }
} 

const generarEmail = (usuario) => usuario+'@gmail.com'