import { useState } from "react";

const Form = (props) => {

    const [address, setAddress] = useState("");
    const [color, setColor] = useState("#ccc");
    const [hasPool, setHasPool] = useState(false);

    const createHouseForm = (e) => {
        e.preventDefault();

        const newHouseObject = {
            address, color, hasPool
        };

        props.addHouseToState(newHouseObject);
        setAddress("");
        setColor("");
        setHasPool(false);
    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <h4>create a house 🏠</h4>
            {/* <div>
                {JSON.stringify(address)} <br />
                {JSON.stringify(color)} <br />
                {JSON.stringify(hasPool)}
            </div> */}
            <hr />

            <form onSubmit={createHouseForm}>
                <p>
                    <input
                        placeholder="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="color"
                        placeholder="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </p>
                <p>
                    can i swim??
                    <input
                        type="checkbox"
                        checked={hasPool}
                        onChange={(e) => setHasPool(e.target.checked)}
                    />
                </p>
                <button>build a house!</button>
            </form>

        </fieldset>
    );
};

export default Form;