import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://akabab.github.io/superhero-api/api/id/";

const Hero = (props) => {

    const [hero, setHero] = useState(null);

    const { heroId } = useParams();
    // console.log(heroId);

    useEffect(() => {
        axios.get(BASE_URL + heroId + ".json")
            .then(res => {
                console.log(res.data);
                setHero(res.data);
            })
            .catch(err => console.log("❌❌❌", err));
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

        </fieldset>
    );
};

export default Hero;