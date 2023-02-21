import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    };

    return <div>
        <h1>Home Page</h1>
        <div>Go to <Link to="/products">the list of Products</Link></div>
        <button onClick={navigateHandler}>Navigate</button>
    </div>;
};

export default HomePage;
