// Objects
const obj1 = {
    food: "pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "bob",
    lastName: "Bobbers",
    power: 9001
};

Object.setPrototypeOf(obj1, obj2);


//[['food', 'pizza'], ['calories', 9001]];
function entries(obj) {
    const output = [];

    for (let batmanKey in obj) {
        if (Object.hasOwn(obj, batmanKey)) {
            output.push([batmanKey, obj[batmanKey]]);
        }
    }

    console.log(output);
}

entries(obj1);




// // for (let key in obj1) {
// //     console.log(key, obj1[key]);
// // }

// // returns an array of keys
// const keyArray = Object.keys(obj1);
// // console.log('keyArray: ', keyArray);

// // return an array of the values
// const valueArray = Object.values(obj1);
// // console.log('valueArray: ', valueArray);

// // returns a 2d array if the key-value pairs
// const entries = Object.entries(obj1);
// // console.log('entries: ', entries);
// [['food', 'pizza'], ['calories', 9001]];

// // const myAnimals = ["elephant", "zebra", "frog", "eagle"];
// // for (let animal of myAnimals) {
// //     console.log(animal);
// // }

// // for .. in iterates over the keys of an object (including keys from the prototype), for .. of iterates over the elements of an iterable (usually arrays)
// // if you use for .. in on an array it will iterate over the indexes since those are technically the keys of the array