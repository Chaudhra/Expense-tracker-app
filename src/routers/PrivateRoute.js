import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header.js";

// PrivateRoute is like a wrapper around Route
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    //We leverage Route, but only render the componenet if the user is authenticated
    // ...rest is all the prop values that were not destructured in the PrivateRoute params list
    <Route
      {...rest}
      component={(props) => {
        return isAuthenticated ? (
          <div>
            <Header />
            {/*If the user is authenticated, only then do we render the componenet */}
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
