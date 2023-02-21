import {Fragment} from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return (<Fragment>
        <MainNavigation/>
        <main>
            <h1>An Error Occurred!</h1>
            <p>Page not found!</p>
        </main>
    </Fragment>);
};

export default ErrorPage;
