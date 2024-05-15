/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// ==================================


// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];
// --------------------------------
const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];


// for of Array
for (let elem of someArray) {

}

// for in Object
for (let key in someObject) {

}

// Object.keys(daObj) -> ['key1', 'key2']
// Object.values(daObj) -> ['bob', 33]
// Object.hasOwn(daObjt, "key")


function findObjectsFilter(searchObj, items) {
    // PSEUDOCODE!!!!
}


findObjectsFilter(searchFor1, items);
// findObjectsFilter(searchFor2, items)
