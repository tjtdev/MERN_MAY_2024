import { useState } from "react";

const Article = (props) => {
    console.log(props);

    // create state variable for this component
    //       state var name, setter method
    //          |            |
    //          v            v
    const [fontDisplay, setFontDisplay] = useState(props.size);

    // function to decrement a number
    const decrease = () => {
        if ((fontDisplay - 3) < 0) {
            return;
        }
        setFontDisplay((prevState) => {
            console.log('prevState: ', prevState);
            const newStateFontDisplay = prevState - 3;
            console.log('newStateFontDisplay: ', newStateFontDisplay);
            return newStateFontDisplay;
        });
    };

    const increase = () => setFontDisplay(fontDisplay + 3);

    return (
        <fieldset>
            <legend>Article.jsx</legend>
            <button onClick={() => decrease()}>➖</button>
            font is {fontDisplay}
            <span style={{ fontSize: fontDisplay + "pt" }}>📝{props.title}</span>
            <button onClick={() => increase()}>➕</button>
        </fieldset>
    );
};

export default Article;