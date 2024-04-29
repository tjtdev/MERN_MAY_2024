class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetStandalone() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    greetDelayed() {
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }, 1000);
    }


    greetArrow = () => {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
    greetDelayedArrow() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }, 1000);
    }
}

const person = new Person('John', 30);

person.greetStandalone();    // Output: Hello, my name is John and I'm 30 years old.
person.greetArrow();         // Output: Hello, my name is John and I'm 30 years old.

person.greetDelayed();       // Output: Hello, my name is undefined and I'm undefined years old.
person.greetDelayedArrow();  // Output: Hello, my name is John and I'm 30 years old.