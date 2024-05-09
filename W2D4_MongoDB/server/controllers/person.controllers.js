import Person from '../models/person.models.js';
// create new
async function createPerson(req, res) {
    try {
        const newPerson = await Person.create(req.body);
        res.json(newPerson);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


async function getAllPeople(req, res) {
    try {
        const allPeople = await Person.find(); // here is our query to find Users
        res.json(allPeople);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}
export {
    createPerson,
    getAllPeople
};