
//<t> generico retorna numero entero bool  arr etc

function queTipoSoy<T>(argumento : T){
    return argumento;
}

let soyString = queTipoSoy('hola');
let soyNumero = queTipoSoy(5);
let soyExplicito = queTipoSoy<number>(100);