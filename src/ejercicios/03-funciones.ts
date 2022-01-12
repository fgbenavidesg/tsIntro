
function resultado (a : number,b : number) : number{
    return (a+b);
}

const sumarFlecha = (a : number,b : number) : number => {

    return a+b;
}

function multiplicar(numero : number, otroNumero ?: number, base: number = 2): number{
    return numero*base;
}
//const suma = resultado(5,4);
//const result = multiplicar(10,20);
//console.log(suma);



interface PersonajeLOR{
    nombre : string;
    pv: number;
    mostrarHp : () => void;
}
// no retorna nada
function curar(personaje : PersonajeLOR , curarx : number) : void {
    personaje.pv += curarx;


}

//crear personaje
const nuevoPersonaje: PersonajeLOR ={
    nombre: 'strider',
    pv : 50,
    mostrarHp(){
        console.log('puntos de vida',this.pv)
    }
}
curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();



