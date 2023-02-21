import {Link, useParams} from "react-router-dom";

const ProductPage = () => {
    const params = useParams();
    const productId = params.productId;

    return <>
        <h1>Product Page</h1>
        <p>Product id: {productId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
    </>;
};

export default ProductPage;
