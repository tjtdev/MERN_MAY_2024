import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const ShowOne = (props) => {

    const [cake, setCake] = useState(null);

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
        </> : "loading...."}</div>
    );
};

export default ShowOne;