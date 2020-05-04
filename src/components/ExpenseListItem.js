import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

export const ExpenseListItem = (props) =>{
    return (
        <div>
            <h3><Link to={`/edit/${props.id}`}>{props.description}</Link></h3>
            <p>{props.amount} - {props.createdAt}</p>
           
        </div>
    );
}


// Dont need anything from the state, so no need to pass mapToState func to connect()
export default connect()(ExpenseListItem);
