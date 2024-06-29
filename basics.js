// Tipos de datos

const number = 45; // number
const word = 'palabra'; // string
const bully = true; //boolean
const fila = [1, 2, 3, 4, 5]; //array
const setti = new Set(); //Set (Arreglo cuyos elementos no se pueden repetir)
const propiedad = {
  hola: 65,
  otro: 64,
}; //object
const mapealo = new Map(); //Map (Objeto cuyos keys no se pueden repetir)
const funcional = () => {}; // function
const funcional2 = function () {}; // function

// Condicionales

if (bully) {
} else if (false) {
} else {
}

switch (word) {
  case 'palabra':
    // esto
    break;
  case 'numero':
    // esto 2
    break;
  default:
}

// Ciclos

while (false) {}

for (let i = 0; i < 10; i++) {
  console.log('Holi')
}

for (const x of fila) {
  
}

fila.forEach((element, index, arr) => {
  console.log(element)
}) // Ciclo

const newArr = fila.map(element => element * 2) // Ciclo (devuelve los elementos en un nuevo array)
// newArray = [2, 4, 6, 8, 10]

// Metodos importantes

propiedad.entries() // te devuelve todas las entradas
propiedad.keys() // te devuelve todas las llaves
fila.every(function (element) { return true }) // valida si una condicion aplica para todos los elementos (AND)
fila.some() // igual que every pero se conforma con uno (OR)
fila.find() // te busca un elmento y te lo devuelve
fila.indexOf() // te dice el index de una busqueda
fila.flat() // 'aplana' la lista ej: [[1, 2], [3, 4]] ; fila.flat() -> [1, 2, 3, 4] Ver: Array.flatMap()
fila.concat() // Busca en google: Javascript Array.concat()
fila.includes() // verifica si un elemento se encuentra dentro del arreglo
fila.reduce() // Casi no se usa, no vale la pena ense˜ãrlo, e complicao, bucalo depue si tienes curiosidad

class Persona // No utilizar, vete por los objetos
{
  Uso = false
}