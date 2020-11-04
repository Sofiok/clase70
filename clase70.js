  
// - Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// - Mostrar en consola el objeto sobreMi

const sobreMi = {
  nombre: null,
  apellido:null,
  edad:null
}
console.log(sobreMi)   

// - Crear una variable llamada user, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: fullname, email, age
// - Mostrar en consola el objeto user
// - Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = {
  fullName: "Sofia Sanchez",
  email: "sofi1234@gmail.com",
  age: "26"
}

console.log(user);
console.log(`Hola, mi nombre es ${user.fullName} y tengo ${user.age} años`);

// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

const song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

const cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: (song.duration / 1000)

  
};    

console.log(cancion)
 
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
const personas = [{
  id: 0,
  nombre: "Ada",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
},
    {
  id: 1,
  nombre: "Grace",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
},
 {
  id: 2,
  nombre: "Hedy",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
},
 {
  id: 3,
  nombre: "Radia",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
},
 {
  id: 4,
  nombre: "Sheryl",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
}
]

console.log(personas)

// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(personas[0].nombre);

// 2. El ID de Grace
console.log(personas[1].id);

// 3. El email de Hedy
console.log(personas[2].email);

// 4. El ID y nombre de Radia
console.log(personas[3].id,personas[4].nombre);

// 5. El telefono de Sheryl
console.log(personas[4].telefono);


// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. 
// El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

let datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};

// codea aca la solucion
datos.telefono = "0192837465";
datos.edad = 29
// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }


// Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

const datos1 = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion
  if (datos1.programa === true) {datos1.lenguajeFavorito = "JavaScript"}


// finalmente, mostramos los datos
console.log(datos1);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }


  
// Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
  const datos2 = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion
if (datos2.programa === true) {datos2.lenguajeFavorito = ["JavaScript","Phyton"]}

// aca mostrar la frase
console.log(
  `Hola, mi nombre es ${datos2.nombre} y programo en ${datos2.lenguajeFavorito}`
);

// Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

// codea aca la solucion

var nombreDisco = disco.nombre;
var anioDisco = disco.anioLanzamiento;
var nombreBanda = disco.banda.nombre;

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzo en "  + anioDisco);
// Debería mostrar 
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011


// Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

const user1 = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion

user1.skills.push("JavaScript")

// despues de la solucion
console.log(user1);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }


// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las 
// medidas de la misma, correspondientes al ancho, alto, y largo. 
// El volumen se calcula multiplicando entre sí dichos valores.


  const getBoxVolume = (size) => { 
    return size.width * size.length * size.height
  };

  const size = { width: 2, length: 5, height: 1 }; 
getBoxVolume(size)   // returns 10

console.log(getBoxVolume(size))

