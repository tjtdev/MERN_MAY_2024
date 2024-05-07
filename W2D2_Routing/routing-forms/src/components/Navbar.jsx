import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <fieldset>
            <legend>Navbar component</legend>
            <Link to="/">home</Link> | {/* */}
            <Link to="/cool">cool</Link> | {/* */}
            <Link to="/form">Find a hero</Link>
        </fieldset>
    );
};

export default Navbar;