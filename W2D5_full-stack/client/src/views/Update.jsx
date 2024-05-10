import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [layers, setLayers] = useState(1);
    const [hasFrosting, setHasFrosting] = useState(false);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get("http://localhost:1337/api/cakes/" + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setImgUrl(res.data.imgUrl);
                setHasFrosting(res.data.hasFrosting);
            })
            .catch(err => {
                console.log("❌❌", err);
            });
    }, []);


    const updateCake = (e) => {
        e.preventDefault();
        const updatedCake = { name, imgUrl, layers, hasFrosting };
        axios.put("http://localhost:1337/api/cakes/" + id, updatedCake)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log("❌❌", err.response.data);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h2>Update</h2>
            <form onSubmit={updateCake}>
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

export default Update;