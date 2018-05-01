// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2); //solo reasigno el valor de age

let name = 'Estela';
let name2 = name;

console.log(name, name2);

name = 'Lolita';
console.log(name, name2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux'; //Siguiendo la lógica de los valores primitivos, que al igualarlos producen una copia y no se cambia el original, podríamos pensar que esta reasignación de un elemento del array sólo afectaría a team, pero en los objetos y los arrays se modifican ambos.

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice(); //Al no decirle a slice lo que quiero sacar del array me hace una copia.

// or create a new array and concat the old one in
const team3 = [].concat(players); //Otra forma es crear un array vacío y concatenarlo con el anterior.

// or create a new array with Array.from
const team4 = Array.from(players);

// or use the new ES6 Spread
const team5 = [...players];

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person; //No hace una copia sino que referencia el uno al otro de manera que uno modifica al otro y viceversa.

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 }); //Cogemos un objeto vacío, le metemos todas las propiedades dee un objeto ya creado (en nuestro caso, person), y añadimos nuevas propiedades
// We will hopefully soon see the object ...spread
const cap3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}
console.log(wes);

const dev = { ...wes }; //Crea una copia del objeto pero no de sus profundidades, de manera que si cambiamos cosas del segundo nivel (social), varían también en el original.
dev.name = 'Wesley';

const dev2 = JSON.parse(JSON.stringify()); //Esto nos crea copias profundas pero no ees muy recomendable.
//Lo conviertes en string todo, y luego vuelves a convertirlo en objeto. Es un poco guarrada.