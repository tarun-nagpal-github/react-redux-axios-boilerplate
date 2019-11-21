// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
// import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom';
import { isPageExistsGlobally } from "../utils/RbacHelpers";

const isAuthenticated = (props) => {
    const isLoggedIn = window.localStorage.getItem('access_token');
    return (isLoggedIn);
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated(props) ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )

            }
        />
    )
}

export default PrivateRoute