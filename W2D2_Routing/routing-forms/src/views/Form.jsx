import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {

    const [heroNum, setHeroNum] = useState("1");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        navigate("/hero/" + heroNum);

    };

    return (
        <div>
            {JSON.stringify(heroNum)}

            <form onSubmit={submitHandler}>
                <input type="number" value={heroNum} onChange={e => setHeroNum(e.target.value)} />
                <button>find</button>
            </form>

        </div>
    );
};

export default Form;