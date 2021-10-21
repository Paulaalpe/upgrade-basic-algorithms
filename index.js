// Iteración #1: Variables
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// Iteración #2: Variables avanzadas

//1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

//1.2
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24;
console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos');

// 1.3 
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1 ["price"] + toy2 ["price"]);

// 1.4 
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1 ["finalPrice"] = car1["basePrice"] + globalBasePrice;
car2 ["finalPrice"] = car2["basePrice"] + globalBasePrice;

// Iteración #3: Operadores

//1.1
alert(10 * 5);

//1.2
alert(10 / 2);

//1.3
alert(15 % 9);

//1.4
y = 10;
z = 5;
x = y + z;

//1.5
x = y * z;

// // Iteración #4: Arrays

//1.1 Consigue el valor "HULK" del array y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
//Nota: aquí se podría usar tb: //avengers.shift(); avengers.unshift("IRONMAN");
avengers.splice(0,1,"IRONMAN");

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
alert(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[4]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//Nota: renombro array porque sino me sale error Uncaught SyntaxError: Identifier 'rickAndMortyCharacters' has already been declared
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[4]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);


