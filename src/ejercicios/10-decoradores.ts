//deecoradores de clases : sirven ppara cambiar las clases en el momento que son definidas
//para que cuando ya sea angular o cualquier tecnologia use estos decoradores 
//en el momento que este compilando o traduciendolo en otra cosa  entonces va a extenderla internamente 
//esas funcionalidades que estamos implementando


function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@ClassDecorator
class MiSuperClase {
        public miPropiedad : string ='abc123' 
        imprimir(){
            console.log('hola mundo');
        }
}
// un decorador :funcion que expande su clase añadiendo funcionalidades especiales