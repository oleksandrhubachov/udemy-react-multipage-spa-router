import {Link} from "react-router-dom";

const PRODUCTS = [
    {id: 'p1', title: 'Book'},
    {id: 'p2', title: 'MacBook'},
    {id: 'p3', title: 'iPhone'},
];
const Products = () => {
    return <>
        <h1>Products Page</h1>
        <ul>
            {PRODUCTS.map(p => <li key={p.id}><Link to={`/products/${p.id}`}>{p.title}</Link></li>)}
        </ul>
    </>;
};

export default Products;
