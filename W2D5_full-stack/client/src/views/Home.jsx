import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/cakes")
            .then((res) => {
                console.log(res.data);
                setCakes(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteCake = (cakeId) => {
        console.log(cakeId);
        axios.delete("http://localhost:1337/api/cakes/" + cakeId)
            .then(res => {
                console.log(res.data);
                const filteredCakes = cakes.filter((cake) => {
                    return cake._id !== cakeId;
                });
                setCakes(filteredCakes);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            all the cakes
            <p>
                {/* {JSON.stringify(cakes)} */}
            </p>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image</th>
                        <th>layers</th>
                        <th>frosting</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cakes.map((cake) => {
                            return <tr key={cake._id}>
                                <td>
                                    <Link to={"/cakes/" + cake._id} >
                                        {cake.name}
                                    </Link>
                                </td>
                                <td> <img src={cake.imgUrl} alt={cake.name} height="100" /> </td>
                                <td>{cake.layers}</td>
                                <td>{cake.hasFrosting ? "✅" : "❌"}</td>
                                <td><button onClick={() => deleteCake(cake._id)}>delete</button></td>
                            </tr>;
                        })
                    }


                </tbody>
            </table>
        </div >
    );
};

export default Home;