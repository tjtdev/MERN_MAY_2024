import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const ShowOne = (props) => {

    const [cake, setCake] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get("http://localhost:1337/api/cakes/" + id)
            .then((res) => {
                console.log(res.data);
                setCake(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>{cake ? <>
            <h3>{cake.name}</h3>
            <img src={cake.imgUrl} alt={cake.name} width="200" />
            <p></p>
            <button onClick={() => navigate("/cakes/" + id + "/update")}>edit</button>
        </> : "loading...."}</div>
    );
};

export default ShowOne;