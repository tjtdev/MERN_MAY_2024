import { useState } from "react";

const Form = (props) => {
    console.log('props: ', props);

    const [name, setName] = useState("");
    const [system, setSystem] = useState("");
    const [orbits, setOrbits] = useState(1);
    const [orbitsError, setOrbitsError] = useState(false);

    const createPlanet = (e) => {
        e.preventDefault();

        const createdPlanet = {
            name: name,
            system,
            orbits
        };

        props.addPlanetToState(createdPlanet);
        props.sayHi();

        // console.log(createdPlanet);
        // update state
        // props.setUniverse((prevUniverse) => [...prevUniverse, createdPlanet]);

        // setUniverse((previousUniverse) => {
        //     // return previousUniverse.concat(createdPlanet) 
        //     return [...previousUniverse, createdPlanet];
        // });
        // clear state
        setName("");
        setSystem("");
        setOrbits(1);
    };

    const checkOrbits = (e) => {
        let orbitsSpin = e.target.value;
        setOrbits(orbitsSpin); //! STATE IS ASYNC!!
        if (orbitsSpin > 9000) {
            console.log("WOW");
            setOrbitsError(true);
        } else {
            setOrbitsError(false);
        }
    };


    return (
        <fieldset>
            <h3>create a planet!</h3>
            <div>
                {JSON.stringify(name)} <br />
                {JSON.stringify(system)} <br />
                {JSON.stringify(orbits)} <br />
            </div>

            <form onSubmit={createPlanet}>
                <div>
                    name: <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    system: <input value={system} onChange={(e) => setSystem(e.target.value)} />
                </div>
                <div>
                    orbits: <input type="number" value={orbits} onChange={checkOrbits} /> <br />
                    {orbitsError ? <p>WOW!!! too many spins!!</p> : <p>you're too weak!</p>}
                    {/* {orbitsError && <p>WOW!!! too many spins!!</p>} */}
                    {/* {orbits > 10 ? "more than 10" : "nothing"} */}
                </div>

                <button>create</button>


            </form>

        </fieldset>
    );
};

export default Form;