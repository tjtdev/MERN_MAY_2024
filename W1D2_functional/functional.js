// callbacks

function greet(name, callback) {
    console.log('Hello ' + name + '!');
    callback();
}

function callMe() {
    console.log('I am callback function');
}

// greet('John', callMe);

// setTimeout(function () {
//     console.log("hello after 3 seconds");
// }, 3000);

// ------ ARRAY.map() ----------
const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

// const myCallback = (animal) => {
//     return animal + " is awesome";
// };
// const coolAnimals = animals.map(myCallback);


const coolAnimals = animals.map((animal, idx) => {
    return `${idx + 1} ${animal} is awesome`;
});
const coolAnimalsShort = animals.map((animal) => animal + " is awesome");
// console.log('coolAnimals: ', coolAnimals);

// --- ARRAY.filter() --------

// I want to return a new array with all the animals that have a string length less then or equal to 5

const filteredAnimals = animals.filter((eachAnimal) => {
    // if (eachAnimal.length <= 5) {
    //     return true;
    // } else {
    //     return false;
    // }
    return eachAnimal.length <= 5 ? true : false;
});
// console.log('filteredAnimals: ', filteredAnimals);

const filteredAnimals2 = animals.filter(eachAnimal => eachAnimal.length <= 5);
// console.log('filteredAnimals2: ', filteredAnimals2);


const people = Object.freeze([
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
]);
// filter people with age greater than or equal to 30
const peopleOver30 = people.filter((person) => {
    return person.age >= 30;
});
// console.log('peopleOver30: ', peopleOver30);


const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 35, "name": "Clefairy", "types": ["normal"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array with just the names of the pokémon whose only type is poison
const onlyPokesWithPoison = pokemon.filter((poke) => {
    return poke.types.length === 1 && poke.types[0] === "poison";
});
// console.log('onlyPokesWithPoison: ', onlyPokesWithPoison);

const onlyNames = onlyPokesWithPoison.map(poke => poke.name);
// console.log('onlyNames: ', onlyNames);



// const pokes = pokemon.filter((poke) => poke.types.length === 1 && poke.types[0] === "poison").map(p => p.name);
// console.log('pokes: ', pokes);


// --- Christian ---
function map(arr, callback) {
    // create a new array the same length as the input array
    const output = new Array(arr.length);
    // iterate over each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // call the callback with each element and store the result in the output array
        output[i] = callback(arr[i], i, arr);
    }
    return output;
}
console.log(map([1, 2, 3], num => num * 2)); // [2,4,6]

function filter(arr, callback) {
    // create new empty array
    const output = [];
    // iterate over each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // call the callback with each element and if the result is truthy, push the element to the output array
        if (callback(arr[i], i, arr)) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([-2, -1, 0, 1, 2], num => num > 0)); //  [1, 2]

function forEach(arr, callback) {
    // iterate over each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // call the callback with each element
        callback(arr[i], i, arr);
    }
}
forEach([1, 2, 3], num => console.log(num)); // 1, 2, 3