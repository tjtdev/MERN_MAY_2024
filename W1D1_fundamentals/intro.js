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
    createdAt: 1543945177623,
    hobbies: ['ski', 'swim', 'gaming']
};
// const email = person.email;
// const userName = person.username
const { email: objectEmail, username, firstName, hobbies } = person;
// console.log(objectEmail, email);
console.log(objectEmail, username, firstName, hobbies[0]);



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
// console.log(city);

// console.log(personObj.addresses[0].city)

const copyPerson = { ...personObj };




//  --- spread operator ----

const a = [{ a: 1, b: 2 }];
const b = [...a];

// Clone it
const cloneA = structuredClone(a);

a[0].a = 100;

console.log(a); //?
console.log(cloneA); //?

// ---rest---
function doStuff(num1, ...args) {
    console.log(args);
}

doStuff(12, 23, 43, 54, 56, 67, 56);

// ======= ARROW FUNCTIONS ========
const hello = function (name) {
    return "hello " + name;
};
hello("bob");

const helloArrow = (name) => {
    console.log("hello");
    return "hello " + name;
};
helloArrow("Alice");

const helloArrow2 = name => "hello " + name;

const aPerson = {
    name: 'John',
    age: 30,
    greetStandalone: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
aPerson.greetStandalone();
aPerson.greetArrow();


// === TERNARY ===
const x = 10;
const y = 20;
const message = "this is a test";
// if (x < y) {
//     return "x is bigger";
// } else {
//     return "y is bigger";
// }

const result = message.length > 3 ? "<h1>here is your data</h1>" : <p>loading..</p>;
console.log(result);