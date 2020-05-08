import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = (props) =>{
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
            <NavLink exact to="/create" activeClassName="is-active">Create Expense</NavLink>
            
            <NavLink exact to="/help" activeClassName="is-active">Help</NavLink>
            <button onClick={props.startLogout}>Logout</button>
            </header>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        startLogout: () =>{
            return dispatch(startLogout());
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Header);