import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <Link to="/">Home</Link> {" "}| {" "}
            <Link to="/cakes/create">create</Link>
        </div>
    );
};

export default Navbar;