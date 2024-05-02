const Display = (props) => {

    return (
        <fieldset>
            <h4> Display </h4>
            {JSON.stringify(props.universe)}

            {
                props.universe.map((planet, idx) => {
                    return (
                        <div key={idx}>
                            <p>name: {planet.name}</p>
                            <p>System: {planet.system}</p>
                            <p>orbits: {planet.orbits}</p>
                            <hr />
                        </div>
                    );
                })
            }



        </fieldset>
    );
};

export default Display;