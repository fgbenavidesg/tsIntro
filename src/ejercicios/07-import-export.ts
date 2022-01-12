import { calculaISV, Producto } from './06-desestructuracion-funcion';


const carritoCompras : Producto[]=[
    {
        desc: 'telefono',
        precio: 100

    },
    {
        desc : 'telefono2',
        precio: 150
    },
];

const [total, isv] = calculaISV(carritoCompras);
console.log('total',total);
console.log('isv',isv);