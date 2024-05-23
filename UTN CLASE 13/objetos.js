/* 
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/

/* let objeto = {
    'precio': 150
    'nombre':'eugenia',
    'marca': 'sakura',
    'id': 360,
    'descripcion': 'caramelos duros rosas',

}
 */
/* 
const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    }
} */

/* console.log('El usuario:'  + user['name'] + ' 'user['lastname'] +
'tiene las preferencias en : ' +
'\n'+ user['user preference']
'\n'+ user['user']
user[theme] + [lang])
 */
/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/
/* 
const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
} */
/* console.log('el usuario:' + user['name'] + user['lastname'] +{
}
    '\n'+ user[user info]['created_at']
    '\n'+ user['address'],
    '\n'+ user['tel']
) */
/* 
console.log(`
El usuario ${user ['name]']} ${user['lastname']}
Tiene las preferencias:
-Theme: ${user['user preference'][theme]}
-Lang: ${user ['user preference']['lang']}
-Created: ${user['user info']['created_at']}
-Address: ${user['user info']['adress']}
-Tel: ${user['user info']['tel']}
`)

console.log(`
ElUsuario: ${user.}`)
     */


/* Crear una funcion llamada 
calcularIva(precio, tipo_factura) 
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}


*/

/* 
const calcularIva = (precio, tipo_factura) => {
    if(tipo_factura === 'c' || tipo_factura === 'b'){
        return {
            precio: precio * 1.21,
            iva: 21%,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    } else if(tipo_factura === 'a'){
        return {
            precio: precio,
            iva: 21%,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    }
}
 */

const calcularIva = (precio, tipo_factura) => {
    if(tipo_factura === 'c' || tipo_factura === 'b'){
        return {
            precio: precio * 1.21,
            iva: precio * 0.21,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    } else if(tipo_factura === 'a'){
        return {
            precio: precio,
            iva: precio * 0.21,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    }
}