// hoisting
// const x = "john"; // anchor 
// x = "alice";
// console.log(x); // ?

// let and const
const myArr = [11, 22, 33];
myArr.push(99);
// console.log(myArr);

const person1 = {
    name: "bob",
    favFood: "🍕"
};
person1.age = 10;
// console.log(person);






// ---- scope ---
let firstName2 = "jane";
function sayHi() {
    firstName2 = "bob";
}

sayHi();
// console.log(firstName2); // ?

1 === "1";
1 == "1";

// --- destructuring ----
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const email = person.email;
const { email: objectEmail, firstName } = person;
// console.log(objectEmail, email);



const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const secondElem = animals[1]; // dog
const [, secondAnimal, , catAnimal] = animals;
// console.log(secondAnimal, catAnimal);



const personObj = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { addresses: [, { city }] } = personObj;
console.log(city);

// console.log(personObj.addresses[0].city)

