
/*
    ===== Código de TypeScript =====
*/

let habilidades : (boolean | string | number)[] = ['bash', 'counter',100];
habilidades.push(true);
//console.log(habilidades);

//serie de llaves para que un codigo sea como nosotros queramos
interface Personaje {
    nombre : string;
    hp : number;
    vocales : string[];
    // opcional : ?
    puebloNatal ?: string;
}

const personaje : Personaje = {
    nombre : 'strider',
    hp : 100,
    vocales: ['a','e','i'] 
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);
//02-arr-obj-interface.ts