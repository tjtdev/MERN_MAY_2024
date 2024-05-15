
const House = (props) => {
    const { house } = props;
    return (
        <div style={{ backgroundColor: house.color }}>
            <p>address: {house.address}</p>
            <p>has pool? {house.hasPool ? "🏊" : "❌"}
                <input
                    type="checkbox"
                    checked={house.hasPool}
                    onChange={() => props.changePoolStatus(props.index)}
                />
            </p>
            <button onClick={() => props.removeHouse(props.index)}>delete listing</button>
        </div>
    );
};

export default House;