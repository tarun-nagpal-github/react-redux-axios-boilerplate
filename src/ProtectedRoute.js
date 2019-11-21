import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        true === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)