//diferencia: alcance
//private solo visible para la clase
//public  visible fuera de la clase
//static   voy a poder acceder a esta propiedad sin instanciar la clase 


class PersonaNormal {
    
    constructor (public nombre : string , public direccion : string){}
}
class Heroe  extends PersonaNormal {
   // alterEgo: string;
    //edad : number;
   // nombreReal : number;

    constructor(
         public alterEgo : string,
         public edad : number,
         public nombreReal : string
         ){
             super( nombreReal,'usa');
         }

    imprimirNombre(){
        return this.alterEgo ;
    }
}
const ironman = new Heroe('ironman',45,'tony');
console.log(ironman);