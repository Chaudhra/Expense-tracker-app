import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
 

// PrivateRoute is like a wrapper around Route
export const PublicRoute = ({isAuthenticated, component:Component, ...rest}) =>{
    return (
        //We leverage Route, but only render the componenet if the user is authenticated
        // ...rest is all the prop values that were not destructured in the PrivateRoute params list
        <Route {...rest} component={(props)=>{
            return (
            isAuthenticated ? (
                ///*If the user is already authenticated, then we want to direct them to the dashboard */
                <Redirect to="/dashboard" />

            ) : (

                <Component {...props} />
            )
            )}} />
    )
}

const mapStateToProps = (state) =>{
    return {
        isAuthenticated:!!state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute);