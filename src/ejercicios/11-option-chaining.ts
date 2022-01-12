

interface Pasajero {
    nombre : string;
    hijos ?: string[];
}

const pasajero01 : Pasajero ={
    nombre : 'melisa',
    hijos : ['ana','pepe'],
}
const pasajero02 : Pasajero ={
    nombre : 'melisa',
}
function imprimeHijos(pasajero : Pasajero): void {
    //intente evaluar los hijos : ? si existe los hijos 2 sino undefine  => al || 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);

}

imprimeHijos(pasajero01);

