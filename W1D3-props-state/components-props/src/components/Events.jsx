import React from 'react';

const Events = () => {
    return (
        <fieldset>
            <legend>Events.jsx</legend>
            a
            <button onClick={() => alert("onClick Event!")}> Click to alert! </button>
            <input onChange={() => console.log("onChange Event!")} placeholder='Type to alert!' />

        </fieldset>
    );
};

export default Events;