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

// Iteración #5: Condicionales
// ejemplo if(number1 === 10){console.log('number1 es estrictamente igual a 10')

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

if (number3 *5 == number1) {
    console.log("number3 por 5 es igual a number1");
}  
if (number3 *5 == number1 && number1 *2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 /2 == number1 || number1 /5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// Iteration#6: Bucles
// 1.1.Crea un bucle for que vaya desde 0 a 9 y muéstralo por consola
for (let bucle1 = 0; bucle1 < 10; bucle1++) {
    console.log(bucle1)
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0
for (let bucle2 = 0; bucle2 < 10; bucle2++) {
    if (bucle2 % 2 === 0) {
        console.log(bucle2);
    }
}

//1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.
for (let bucle3 = 0; bucle3 <= 10; bucle3++) {
    if (bucle3 < 10){
        console.log('Intentando dormir');
      }
      else (
        console.log('Dormido!')
      )
}