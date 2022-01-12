
export interface Producto {
    desc : string;
    precio : number;

}


const telefono : Producto = {
    desc : 'a1',
    precio: 600
}

const tableta : Producto = {
    desc : 'ipad',
    precio: 500
}

export function calculaISV(productos : Producto[] ):[number,number]{

    let total =0;
//desestructuracion de argumentos
//productos.forEach(({precio,desc})=>{    
    productos.forEach((producto)=>{

        total += producto.precio;
    })

    return [total, total *0.15];
}

const articulos = [telefono,tableta];

const isv = calculaISV(articulos);
//desestructurando el arreglo
//const [total,isv] = calculaISV(articulos);
//console.log(total,isv);
console.log(isv);
console.log(1100*0.5);