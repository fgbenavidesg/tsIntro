
interface SuperHeroe{
    nombre : string;
    edad : number;
    direccion : Direccion;
    mostrarDireccion : () => string;
}

interface Direccion {
    calle: string; 
    pais : string; 
    ciudad : string;
}

const superHeroe = {
    nombre: 'jo',
    edad : 19,
    direccion : {
        calle: 'palmeras',
        pais :  'peru',
        ciudad: 'aea'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad +','+ this.direccion.pais;
    }
}
const dato = superHeroe.mostrarDireccion();
console.log(dato);