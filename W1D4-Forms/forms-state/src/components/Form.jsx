import { useState } from "react";
const animals = (['🐈', '🐒', '🦈']);

const Form = () => {

    const [zoo, setZoo] = useState(animals);

    // state var for the input
    const [animalInput, setAnimalInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // update the zoo

        // 1. create a copy of state
        const copyZoo = [...zoo];
        copyZoo.push(animalInput);
        // console.log(copyZoo);
        setZoo(copyZoo);

        // setZoo([...zoo, animalInput]);

        // reset the input
        setAnimalInput("");
    };


    return (
        <fieldset>
            <legend>Form.jsx</legend>

            <h3>add an animal to the zoo</h3>

            <form onSubmit={handleSubmit}>
                <p>animalInput: {JSON.stringify(animalInput)}</p>
                <input value={animalInput} onChange={(e) => setAnimalInput(e.target.value)} />

                <button>add animal</button>
            </form>

            <h3>display zoo</h3>
            <hr />
            <p>{JSON.stringify(zoo)}</p>
            {
                zoo.map((animal, idx) => {
                    return <li key={idx}>  {animal}   </li>;
                })
            }
        </fieldset>
    );
};

export default Form;