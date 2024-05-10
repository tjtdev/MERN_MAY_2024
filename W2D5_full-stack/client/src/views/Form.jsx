import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = (props) => {

    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [layers, setLayers] = useState(1);
    const [hasFrosting, setHasFrosting] = useState(false);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const createCake = (e) => {
        e.preventDefault();
        console.log("hello");

        const ourNewCake = { name: name, imgUrl, layers, hasFrosting };
        console.log(ourNewCake);

        // send this req to the server
        axios.post("http://localhost:1337/api/cakes", ourNewCake)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data);
                setErrors(err.response.data.errors);
            });

    };

    return (
        <div>
            <form onSubmit={createCake}>
                <div>
                    name:
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    imgUrl:
                    <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                    {errors.imgUrl && <p>{errors.imgUrl.message}</p>}
                </div>
                <div>
                    layers:
                    <input type="number" value={layers} onChange={e => setLayers(e.target.value)} />
                    {errors.layers && <p>{errors.layers.message}</p>}
                </div>
                <div>
                    hasFrosting:
                    <input type="checkbox" checked={hasFrosting} onChange={e => setHasFrosting(e.target.checked)} />
                </div>
                <button>submit</button>

            </form>
        </div>
    );
};

export default Form;