import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authUser, ...rest }:any) => (
    <Route {...rest} render={props =>
        authUser != null
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/signin'}}/>
    }/>
);

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute)