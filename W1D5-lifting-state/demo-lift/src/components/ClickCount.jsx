const ClickCount = (props) => {
    return <button onClick={
        () => props.setCount((prevCount) => {
            return prevCount + 1;
        })
    }>update THE GLOBAL COUNT</button>;
};

export default ClickCount;