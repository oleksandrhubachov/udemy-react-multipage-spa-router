import {NavLink} from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    let activeLinkClassName = ({isActive}) => {
        return isActive ? classes.active : undefined;
    };

    return (<header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="/" className={activeLinkClassName} end={true}>Home</NavLink></li>
                <li><NavLink to="/products" className={activeLinkClassName} end={true}>Products</NavLink></li>
            </ul>
        </nav>
    </header>);
};

export default MainNavigation;
