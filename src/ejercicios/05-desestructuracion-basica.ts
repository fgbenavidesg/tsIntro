interface Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;
}

interface Detalles {
    autor : string;
    anio : number;
}

const reproductor : Reproductor ={

    volumen :90,
    segundo: 10,
    cancion: 'imagine demons',
    detalles : {
        autor: 'no me acuerdo',
        anio: 2010,
    } 
}
//desestructuracion

// const {volumen,segundo,detalles} = reproductor;
// const {autor} = detalles;
//console.log(reproductor.volumen);

//desestructuracion arreglos

const dbz : string[]= ['vegeta','goku'];
const [ , p1] = dbz;
//const [p0,p1] = dbz;
console.log(p1);


