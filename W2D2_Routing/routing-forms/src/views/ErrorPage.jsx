import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <h3 style={{ color: "red" }}>404 not found</h3>
            <button onClick={() => navigate("/form")}>back</button>

        </>
    );
};

export default ErrorPage;