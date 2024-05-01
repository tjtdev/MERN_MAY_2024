const ColorComponent = (props) => {
    console.log(props);
    return (
        <fieldset style={{ backgroundColor: props.color }}>
            <legend>ColorComponent.jsx</legend>
        </fieldset>
    );
};

export default ColorComponent;