import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://akabab.github.io/superhero-api/api/id/";

const Hero = (props) => {

    const [hero, setHero] = useState(null);

    const navigate = useNavigate();

    const { heroId } = useParams();
    // console.log(heroId);

    useEffect(() => {
        axios.get(BASE_URL + heroId + ".json")
            .then(res => {
                console.log(res.data);
                setHero(res.data); //  { }
            })
            .catch(err => {
                console.log("❌❌❌", err);
                navigate("/error", { replace: true });
            });
    }, []);

    return (
        <fieldset>
            <legend>Hero component</legend>
            {/* hero: {JSON.stringify(hero)} */}
            {
                hero ? <>
                    <h2>{hero.name}</h2>
                    <img src={hero.images.md} alt={hero.name} />
                </> : <h2>Loading...</h2>
            }
            <br />
            <button onClick={() => navigate(-1)}>back</button>

        </fieldset>
    );
};

export default Hero;